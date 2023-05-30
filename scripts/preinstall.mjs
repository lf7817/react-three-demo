// @ts-check
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33m 请使用pnpm安装依赖 \u001b[39m\n`);
  process.exit(1);
}
