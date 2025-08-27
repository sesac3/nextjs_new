"use client";

export default function Page() {
  return (
    <div className="wrap">
      <header className="header">
        <nav className="nav">
          <span>메인메뉴</span>
          <span>기능1</span>
          <span>기능2</span>
          <span>기능3</span>
        </nav>
      </header>

      <main className="main">
        <h1>Next.js Git샘플용 Ver2.0.1</h1>
        <p>
          간단한 Git 샘플용 데모 페이지 Ver2.0.1 입니다.
          <br />
          fork 테스트 기능추가 업데이트 완료.
        </p>
      </main>

      <footer className="footer">© 2025 Next.js Test Project</footer>

      <style jsx>{`
        .wrap { font-family: Arial, sans-serif; text-align: center; }
        .header { background: #1e3a8a; padding: 12px; }
        .nav { display: flex; justify-content: center; gap: 20px; font-weight: bold; color: white; }
        .main { padding: 60px 20px; }
        .main h1 { font-size: 2rem; color: #1e3a8a; }
        .footer { margin-top: 50px; padding: 20px; background: #f3f4f6; color: #555; font-size: 0.9rem; }
      `}</style>
    </div>
  );
}
