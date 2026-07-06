import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const assetsDir =
  "C:/Users/Tom/.cursor/projects/c-Users-Tom-Development-Mapa-website/assets";
const outputDir = "public/images/leistungen";

const images = [
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_altbausanierung_fassade-8c9471de-dddd-4d0f-b782-dcc8f37da3aa.png",
    output: "altbausanierung-fassade.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_altbausanierung_innen-b2324aff-2739-4a87-84bd-e0f54308b840.png",
    output: "altbausanierung-innen.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_Flachdachabdichtung-ebe5d15d-322d-49cf-a238-d23df9a6f97c.png",
    output: "flachdachabdichtung-dach.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_Flachdach_fluessig-b36be48a-8e05-4656-9750-7cf1d146cf8c.png",
    output: "flachdachabdichtung-fluessig.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_Malerarbeiten-a85d3224-d2e5-4281-aad3-89ec2645ddbe.png",
    output: "putz-malerarbeiten-maler.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_Putzarbeiten-84eb329b-cdd9-4021-ac0d-02e559874e05.png",
    output: "putz-malerarbeiten-putz.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_gartengestaltung_garten-72dd0940-f7f6-4a9a-996f-f4dad9b2cb77.png",
    output: "gartengestaltung-garten.webp",
  },
  {
    input:
      "c__Users_Tom_AppData_Roaming_Cursor_User_workspaceStorage_c87562974af48fc01a4edae8e5406ef8_images_Gartengestaltung_steine-aa175ca9-03d0-4594-8f89-67a49b8825c8.png",
    output: "gartengestaltung-steine.webp",
  },
];

await mkdir(outputDir, { recursive: true });

for (const { input, output } of images) {
  const inputPath = path.join(assetsDir, input);
  const outputPath = path.join(outputDir, output);

  await sharp(inputPath)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  const { size } = await import("node:fs/promises").then((fs) =>
    fs.stat(outputPath),
  );

  console.log(`${output}: ${meta.width}x${meta.height}, ${Math.round(size / 1024)} KB`);
}
