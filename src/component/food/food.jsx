import './food.css'

function Food() {
    return ( 
        <>
             <main>
      <div class="container">
        <div class="top">
          <img class="header" src="header.png" />
        </div>
        <div class="content">
          <div class="info">
          </div>
          <div class="grid">
            <div class="item-holder">
              <div class="item">
                <img src="smoothie.png" />
                <div class="label">Kem Hồng</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="grapefruit.png" />
                <div class="label">Bánh Vàng</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="desert.png" />
                <div class="label">Bánh Kem Nhọn</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="strawberry.png" />
                <div class="label">Bánh Dâu</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="unknown.png" />
                <div class="label">Kẹo Đa Sắc</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="icecream.png" />
                <div class="label">Bánh kem cuộn</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="unknown2.png" />
                <div class="label">Bánh Trái Cây</div>
              </div>
            </div>
            <div class="item-holder">
              <div class="item">
                <img src="vite.svg" />
                <div class="label">Vite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        </>
     );
}

export default Food;