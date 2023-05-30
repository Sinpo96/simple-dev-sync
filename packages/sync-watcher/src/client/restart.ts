import { exec } from 'child_process';

exec('yalc push', (error: any, stdout: any, stderr: any) => {
  if (error) {
    console.error(`执行命令时出错: ${error}`);
    return;
  }

  console.log(stdout);
});
