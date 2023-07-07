import {execSync} from 'child_process';
import getConfig from './mergeConfig';

try {
  const {scriptBeforePush} = getConfig();

  const customScriptOutput = execSync(scriptBeforePush);
  console.log(customScriptOutput.toString());

  const yalcPushOutput = execSync('yalc push');
  console.log(yalcPushOutput.toString());
} catch (error) {
  console.error(`检测到热更新执行命令时出错: ${error}`);
}
