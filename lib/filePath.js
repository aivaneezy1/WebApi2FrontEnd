import path from "path";
export function filePath(args1, args2, args3) {
  return path.join(process.cwd(), args1, args2, args3);
}
