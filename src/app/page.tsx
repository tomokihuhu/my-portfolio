import Link from 'next/link';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans tracking-tight">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* Header & Hero Section */}
        <section className="space-y-8">
          <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase rounded-full">
            Engineer Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            自らの課題を手触り感のある<br className="hidden md:block" />
            コードで解決するエンジニア。
          </h1>
          <div className="space-y-4 max-w-3xl">
            <p className="text-lg text-slate-600 leading-relaxed">
              久保木 智文（Tomofumi Kuboki）<br />
              大阪大学 基礎工学部 情報科学科 3年
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              既存の学習ツールに満足できず、Next.jsとTiDBを用いてフルスタックな学習管理アプリの個人開発・公開に取り組んでいます。Web開発による「動くものを作る力」を磨く傍ら、Udemy等を通じてデータ分析・機械学習（Python）の学習も進め、技術の幅を広げています。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="https://github.com/tomokihuhu" 
              target="_blank"
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition"
            >
              GitHubを見る
            </Link>
            <Link 
              href="https://strict-study-app-ten.vercel.app/" 
              target="_blank"
              className="px-6 py-3 bg-white border border-slate-300 text-slate-900 font-medium rounded-full hover:border-slate-400 transition shadow-sm"
            >
              strict-study-appを開く
            </Link>
          </div>
        </section>

        {/* Focus Section */}
        <section className="p-8 md:p-12 bg-white rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Focus Project</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">フルスタック学習管理システム「strict-study-app」</h2>
          <p className="text-sm font-medium text-blue-600 mb-6">現在公開中・機能拡張フェーズ</p>
          <p className="text-slate-600 leading-relaxed mb-8">
            「既存の学習管理ツールは自由度が高く、つい甘えが出てしまう」という自身の課題から、より厳密（strict）に学習をトラッキングする仕組みを自作。Next.js、TiDB (MySQL) を用いて開発し、Vercelにて一般公開しています。
          </p>
          <Link 
            href="https://strict-study-app-ten.vercel.app/" 
            target="_blank"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            本番環境を見る &rarr;
          </Link>
        </section>

        {/* Works Section */}
        <section className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Works</h2>
            <p className="text-slate-600">strict-study-appの開発ストーリーと技術的アプローチ</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl font-bold text-slate-900">01</div>
              <h3 className="text-xl font-bold">開発の背景とコンセプト</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                世の中にある学習管理アプリでは自分のサボりを防ぎきれなかったため、「自分にとって本当に必要な、従来よりも厳しい管理ができるツール」をコンセプトに開発をスタートしました。課題の手触りがあるからこそ、必要な機能を絞り込んで実装を進めています。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl font-bold text-slate-900">02</div>
              <h3 className="text-xl font-bold">モダンな技術構成とデプロイ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                初期はローカル環境（SQLite）で構築し、本番公開を見据えてサーバーレスのTiDB Cloudへデータベースを移行。NextAuthを用いた認証やTypeORMによるデータ操作など、モダンな技術を組み合わせてVercelへのデプロイまでを一人で完遂しました。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-xl font-bold text-slate-900">03</div>
              <h3 className="text-xl font-bold">現在の状況と今後の展望</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                現在はベースとなる記録・管理機能が稼働し、Web上に公開中。今後は実際の自分の学習で使用しながら、「どうすればよりストイックに学習を継続できるか」という視点でUIの改善や機能拡張を続けていく予定です。
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-slate-600">過酷な現場のロジスティクスを支える実務</p>
          </div>
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">阪大探検部 合宿係</h3>
            <p className="text-slate-400 text-sm mb-6">遠征の企画立案・ロジスティクス</p>
            <p className="text-slate-300 leading-relaxed max-w-3xl">
              数十キロに及ぶ長距離トレイルやケイビング（洞窟探検）など、過酷なアウトドア活動において合宿や遠征の企画・運営を担当。数十人規模の部員の装備配分、車両手配、行程・安全管理といった複雑なロジスティクスを緻密に計画し、現場でのトラブルに対処しながらプロジェクトを完遂に導く実務を担っています。
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-slate-600">用途と文脈に基づく技術スタック</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Web Frontend / Backend</h4>
              <p className="font-medium text-slate-900 mb-1">Next.js, React, Go, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Database & Auth</h4>
              <p className="font-medium text-slate-900 mb-1">TiDB (MySQL), SQLite, NextAuth, TypeORM</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Data Analysis / ML (事前学習中)</h4>
              <p className="font-medium text-slate-900 mb-1">Python, Random Forest等の基礎モデル</p>
              <p className="text-xs text-slate-500">Udemy等でデータ分析の基礎知識をインプット中</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Others</h4>
              <p className="font-medium text-slate-900 mb-1">C, Git / GitHub</p>
              <p className="text-xs text-slate-500">大学での情報科学の基礎として</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Tomofumi Kuboki / Engineer Portfolio</p>
          <div className="flex gap-6">
            <Link href="https://github.com/tomokihuhu" target="_blank" className="hover:text-slate-900 transition">GitHub</Link>
            <Link href="https://strict-study-app-ten.vercel.app/" target="_blank" className="hover:text-slate-900 transition">strict-study-app</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}