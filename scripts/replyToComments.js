// scripts/replyToComments.js
// 薄いラッパー：既存のCLI引数・動作は維持しつつ、実装は共有ライブラリに委譲

import { runWithCore } from '@aa-0921/note-auto-core';

(async () => {
  await runWithCore(async ({ core, wantsBackground }) => {
    // ======================================
    // ここをカスタマイズしてください
    // ======================================
    
    // ベースプロンプトに追加するプロンプト（オプション）
    // 例：アカウントごとの口調（男性・女性など）を指定
    const additionalPrompt = `一般的な大人の男性の口調で書いてください。
- 親しみやすく、率直な表現を心がけてください
- 共感を示す表現（「なるほど」「確かに」「参考になります」など）を自然に使ってください
- 丁寧さを保ちつつ、カジュアルで読みやすい表現を混ぜてください
- 過度に感情的な表現は避け、簡潔で要点を押さえたコメントを心がけてください`;

    // ベースシステムメッセージに追加するメッセージ（オプション）
    // 例：アカウントの属性（年齢、性別など）を指定
    const additionalSystemMessage = `あなたは一般的な大人の男性ユーザーです。
親しみやすく、率直な口調で返信を書いてください。
共感を示す表現を自然に使いながら、簡潔で要点を押さえたコメントを心がけてください。
過度に感情的な表現は避け、読みやすさを重視してください。`;
    
    // ======================================
    
    console.log('=== コメント返信処理を開始します ===');
    console.log('');
    
    // オプション設定
    const options = {
      additionalPrompt: additionalPrompt,
      additionalSystemMessage: additionalSystemMessage,
    };
    
    // コメント返信を実行
    const result = await core.runReplyToComments(options);
    
    console.log('');
    console.log('✅ コメント返信が完了しました');
    console.log(`総返信成功件数: ${result.replyCount}件`);
    console.log(`処理した記事数: ${result.articlesProcessed}件 / ${result.totalArticles}件`);
  });
})();
