import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Criar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir pastas de input e output
const inputDir = path.join(__dirname, 'src', 'assets');
const outputDir = path.join(__dirname, 'src', 'assets-webp');

// Criar a pasta de output se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extensões de imagens a processar
const exts = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

// Função para listar todas as imagens (recursivamente)
function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

// Pegar todas as imagens
const images = getAllImageFiles(inputDir);

// Converter cada imagem para WebP
images.forEach(imgPath => {
  const relativePath = path.relative(inputDir, imgPath); // mantém a estrutura de pastas
  const outPath = path.join(outputDir, relativePath).replace(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i, '.webp');

  // Certificar que a pasta do ficheiro existe
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  sharp(imgPath)
    .webp({ quality: 80 })
    .toFile(outPath)
    .then(() => console.log(`Convertido: ${outPath}`))
    .catch(err => console.error(`Erro ao converter ${imgPath}:`, err));
});
