// Storybook上でコンポーネントのテストを行うには、.stories.tsファイルを作成する必要があります。
// これによりコンポーネントの異なる状態を視覚的にテストすることが可能です。

import Example from '../Example.astro'; // コンポーネントをインポート

export default {
  component: Example, // Storybookで使用するコンポーネントを指定
};

// Defaultストーリーを定義
export const Default = {
  args: {
    text: 'Example text', // コンポーネントに渡すデフォルトの引数
  }, // コンポーネントにpropsが渡らない場合は不要
};

// 違う状態のテストを行う場合は、ストーリーを追加します。
export const Japanese = {
  args: {
    text: '日本語のテキストの場合',
  },
};