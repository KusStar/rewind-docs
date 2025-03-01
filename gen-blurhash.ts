import { COVERS } from "./utils/covers";
import sharp from 'sharp';
import { encode } from "blurhash";
import { blurhashToBase64 } from "blurhash-base64";
import fs from 'fs'

async function encodeImageToBlurhash(filePath: string): Promise<string> {
  // Load and process the image using sharp
  const image = sharp(filePath);

  // Get image metadata (width and height)
  const metadata = await image.metadata();

  // Encode the image to BlurHash
  const blurhashString = encode(
    new Uint8ClampedArray(await image.ensureAlpha().raw().toBuffer()),
    metadata.width,
    metadata.height,
    4, // x-components
    4  // y-components
  );

  return blurhashString;
}

const result = {}

const main = async () => {
  for (const key in COVERS) {
    const blurhash = await encodeImageToBlurhash("./public/" + COVERS[key]);
    result[key] = blurhash;
  }
  console.log(result);

  fs.writeFileSync('./utils/blurhash-covers.json', JSON.stringify(result, null, 2));
}

main();
