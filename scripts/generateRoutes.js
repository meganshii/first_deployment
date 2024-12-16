import fs from "fs";
import path from "path";

const getRoutes = (dirPath = "./src/app", basePath = "") => {
  const resolvedPath = path.resolve(process.cwd(), dirPath).replace(/\\/g, "/");

  if (!fs.existsSync(resolvedPath)) {
    console.error(`Directory does not exist: ${resolvedPath}`);
    process.exit(1); // Exit the script with an error code
  }

  const files = fs.readdirSync(resolvedPath);
  const routes = [];

  files.forEach((file) => {
    const fullPath = path.join(resolvedPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // If the directory is dynamic, i.e., contains `[slug]`, include it in the route
      const dynamicRoute = file.startsWith("[") && file.endsWith("]") 
        ? `${basePath}/${file}` 
        : basePath;

      // Recurse into the directory
      routes.push(...getRoutes(fullPath, dynamicRoute));
    } else if (file.startsWith("page.")) {
      // Add the route for the page file
      const route = basePath ? `${basePath}` : "/";
      routes.push(route.replace(/\\/g, "/"));
    }
  });

  return routes;
};

// Generate Routes and Save to File
const routes = getRoutes("src/app"); // Pointing to the correct app directory in src
const outputPath = path.join(process.cwd(), "routes.json");

fs.writeFileSync(outputPath, JSON.stringify(routes, null, 2), "utf-8");
console.log(`Routes saved to ${outputPath}`);
