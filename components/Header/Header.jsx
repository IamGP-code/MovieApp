const Header = () => {
  return (
    <>
      <nav>
        <div className="title">TvMaze Shows</div>
      </nav>
      <style jsx>
        {
            `
            nav {
                width: 100%;
                height: 80px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid gray;
            }

            .title {
                font-size: 1.5rem;
                margin-left: 10px;
            }
            
            `
        }
      </style>
    </>
  );
};

export default Header;
