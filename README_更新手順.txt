<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="BASE CAMP YAMATO｜鷺沼駅徒歩約5分。仕事・トレーニング・遊びを自由に楽しめる完全貸切の秘密基地。">
  <meta property="og:title" content="BASE CAMP YAMATO">
  <meta property="og:description" content="やる時はやる。楽しむ時は思い切り。">
  <meta property="og:image" content="assets/hero-main.webp">
  <title>BASE CAMP YAMATO｜Version 1.2</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="site-header">
  <a class="brand" href="#top" aria-label="BASE CAMP YAMATO トップへ">
    <span class="brand-emblem">BC</span>
    <span class="brand-copy">BASE CAMP<strong>YAMATO</strong><small>SECRET BASE</small></span>
  </a>
  <button class="menu-button" aria-label="メニューを開く" aria-expanded="false">MENU</button>
  <nav class="nav">
    <a href="#about">BASE CAMPとは</a>
    <a href="#equipment">備品紹介</a>
    <a href="#price">料金</a>
    <a href="#persona">ペルソナ</a>
    <a href="#story">オーナーの想い</a>
    <a href="#access">アクセス</a>
  </nav>
  <a class="reserve-button compact" href="#reserve">LINEで予約する</a>
</header>

<main id="top">
  <section class="hero">
    <img src="assets/hero-main.webp" alt="ワークスペース、トレーニング、リラックスを楽しむBASE CAMP YAMATO">
  </section>

  <section id="about" class="section intro reveal">
    <p class="section-label">BASE CAMPとは</p>
    <h1>やる時はやる。<br>楽しむ時は思い切り。</h1>
    <p class="lead">仕事も、トレーニングも、ゲームも、映画も。仲間と声を掛け合いながら、その日の「やりたい」を自由に楽しめる、完全貸切の秘密基地です。</p>
  </section>

  <section id="equipment" class="section soft reveal">
    <p class="section-label">備品紹介</p>
    <h2>実際の規模感に合わせた、ちょうどいい設備。</h2>
    <div class="equipment-grid">
      <article>
        <svg class="equipment-art" viewBox="0 0 360 220" role="img" aria-label="長テーブル、モニター2台、椅子2脚">
          <g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M48 136h264M70 136v52M290 136v52"/>
            <rect x="85" y="62" width="68" height="46" rx="4"/><path d="M119 108v28M99 136h40"/>
            <rect x="203" y="62" width="68" height="46" rx="4"/><path d="M237 108v28M217 136h40"/>
            <path d="M89 160c-21 0-32 11-32 27M89 160v35M271 160c21 0 32 11 32 27M271 160v35"/>
            <path d="M58 177h58M244 177h58"/>
            <path d="M163 110h34l8 26h-50z"/>
          </g>
        </svg>
        <h3>ワークスペース</h3>
        <p>長テーブル、モニター2台、椅子2脚。仕事や勉強に集中できます。</p>
      </article>

      <article>
        <svg class="equipment-art" viewBox="0 0 360 220" role="img" aria-label="筋トレマシン1台とバランスボール">
          <g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M86 187V42h112v145M86 62h112M112 62l18 36M172 62l-18 36"/>
            <path d="M129 99h26v54h-26zM129 153l-28 34M155 153l31 34"/>
            <path d="M199 87h39v100M199 111h39"/>
            <circle cx="275" cy="150" r="43"/>
            <path d="M245 150h60M253 129h44M253 171h44"/>
          </g>
        </svg>
        <h3>トレーニング</h3>
        <p>筋トレマシン1台とバランスボール。仲間と声を掛け合って使えます。</p>
      </article>

      <article>
        <svg class="equipment-art" viewBox="0 0 360 220" role="img" aria-label="ソファとローテーブル">
          <g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M68 101c0-20 13-31 32-31h160c19 0 32 11 32 31v63H68z"/>
            <path d="M92 102v48M268 102v48M68 128h224M91 164v24M269 164v24"/>
            <rect x="128" y="151" width="104" height="25" rx="4"/>
            <path d="M145 176v20M215 176v20"/>
            <path d="M148 151l12-27h40l12 27"/>
          </g>
        </svg>
        <h3>リラックス</h3>
        <p>休憩、ゲーム、映画鑑賞など、その日の気分に合わせて自由に。</p>
      </article>
    </div>
  </section>

  <section id="price" class="section reveal">
    <p class="section-label">料金</p>
    <h2>55分単位。1〜4名まで同一料金。</h2>
    <div class="price-grid">
      <article><span>55分</span><strong>¥2,500</strong><small>1コマ</small></article>
      <article class="popular"><b>人気 No.1</b><span>115分</span><strong>¥4,000</strong><small>2コマ</small></article>
      <article><span>175分</span><strong>¥5,500</strong><small>3コマ</small></article>
      <article><span>235分</span><strong>¥7,000</strong><small>4コマ</small></article>
      <article><span>295分</span><strong>¥8,500</strong><small>5コマ</small></article>
    </div>
    <div class="price-notes">
      <div><strong>延長</strong><span>55分ごと ¥2,000</span></div>
      <div><strong>初回限定</strong><span>¥1,000 OFF</span></div>
      <div><strong>回数券</strong><span>5コマ券 10%OFF / 10コマ券 15%OFF</span></div>
    </div>
  </section>

  <section id="persona" class="section soft reveal">
    <p class="section-label">ひでまるおばけのペルソナ</p>
    <h2>Scene 01｜仕事に集中する日</h2>
    <div class="persona-layout">
      <img class="persona-image float-motion" src="assets/persona-scene1.webp" alt="仕事に集中するひでまるおばけ">
      <div>
        <p>広いデスクと快適なWi‑Fiで、仕事や勉強に集中する一日。お気に入りのドリンクを片手に、自分のペースで作業を進めます。</p>
        <p class="note">ペルソナは、利用者の声や新しい使い方に合わせて少しずつ増やしていきます。</p>
      </div>
    </div>
  </section>

  <section id="story" class="section reveal">
    <p class="section-label">オーナーの想い</p>
    <h2>一人ではできないことを、仲間と楽しめる場所へ。</h2>
    <div class="story-copy">
      <p>筋力トレーニングを続ける中で、トレーナーや仲間に支えてもらいながら限界へ挑戦する楽しさを知りました。</p>
      <p>しかし、普通のジムでは、友達同士で声を掛け合ったり、好きな音楽を流したり、自分たちのペースでトレーニングすることが難しいと感じます。</p>
      <p>「仲間と自由に使えるレンタルジムが、近くにあったらいい。」そこから発想を広げ、仕事をしたり、ゲームをしたり、映画を観たり、その日の好きなことを楽しめる“秘密基地”をつくりたいと思いました。</p>
      <p>BASE CAMP YAMATOは、まだ完成形ではありません。皆さまからいただく気付きやアイデアを取り入れながら、もっと快適で、もっと楽しい施設へ育てていきます。</p>
      <p>ひでまるおばけと一緒に利用者の皆さまがレベルアップしていくように、私自身も、この施設も、少しずつレベルアップしていきたいと思っています。</p>
      <p class="quote">皆さまと一緒に、この秘密基地を育てていけたら嬉しいです。</p>
    </div>
  </section>

  <section id="access" class="section soft reveal">
    <p class="section-label">アクセス</p>
    <h2>鷺沼駅から徒歩約5分。</h2>
    <div class="access-card">
      <div>
        <strong>東急田園都市線「鷺沼駅」</strong>
        <p>〒216-0004<br>神奈川県川崎市宮前区鷺沼3丁目1−1</p>
        <p>渋谷駅から約40分</p>
      </div>
      <a class="outline-button" href="https://www.google.com/maps/search/?api=1&query=神奈川県川崎市宮前区鷺沼3丁目1-1" target="_blank" rel="noopener">Googleマップで見る</a>
    </div>
  </section>

  <section id="reserve" class="reserve-section reveal">
    <p>今日はどのペルソナで基地を楽しむ？</p>
    <a class="reserve-button pulse" href="#" id="line-reserve">LINEで予約する</a>
    <small>LINE公式アカウントのURL取得後にリンクを設定します。</small>
  </section>
</main>

<footer>
  <strong>BASE CAMP YAMATO</strong>
  <span>また基地で会おう。</span>
  <span>© 2026 BASE CAMP YAMATO</span>
</footer>
<script src="script.js"></script>
</body>
</html>
