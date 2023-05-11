import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    output: [
        {
            dir: 'bundle',
            format: 'cjs'
        }
    ],
    plugins: [
        typescript(),
        nodeResolve(),
        commonjs()
    ],
};
