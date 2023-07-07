import {execSync} from 'child_process';
import colors from 'colors';
import getConfig from './mergeConfig';

try {
  const {scriptBeforePush} = getConfig();

  console.log(colors.green(`running → ${scriptBeforePush}`));
  const customScriptOutput = execSync(scriptBeforePush);
  console.log(customScriptOutput.toString());

  const yalcPushOutput = execSync('yalc push');
  console.log(yalcPushOutput.toString());
} catch (error) {
  console.log(colors.red(`检测到热更新执行命令时出错: ${error}`));
}
