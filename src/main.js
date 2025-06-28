import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="main-bg"></div>
  <div class="main-radial"></div>
  <div class="main-ellipse"></div>
  <div class="main-ellipse2"></div>
  <div class="main-ellipse3"></div>
  <nav class="navbar">
    <a class="nav-link" href="#">Home</a>
    <a class="nav-link" href="#">About us</a>
    <a class="nav-link" href="#">Contacts</a>
    <a class="nav-link" href="#">Wine</a>
    <button class="search">Search</button>
    <button class="login">Log in</button>
    <button class="signup">Sign up</button>
  </nav>
  <div class="main-content">
    <div class="main-title">In wine,<br>  there is <br>    truth</div>
    <div class="main-quote">“Beer is made by men, wine by God.”</div>
    <div class="main-desc">
      Regularly drinking more wine than recommended increases a person's risk of developing cancer, liver disease, chronic pancreatitis, sleep disorders and more.
    </div>
    <button class="main-btn">Read more</button>
  </div>
  <div class="main-stop">Stop</div>
  <div class="main-relax">Relax</div>
  <div class="main-overthinking">overthinking</div>
  <div class="main-letitgo">and let it go!</div>
  <section class="cards-section">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="wine1">
      <div class="card-title">Wine Card 1</div>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1514361892635-cebbd82b8b09?auto=format&fit=crop&w=400&q=80" alt="wine2">
      <div class="card-title">Wine Card 2</div>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="wine3">
      <div class="card-title">Wine Card 3</div>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="wine4">
      <div class="card-title">Wine Card 4</div>
    </div>
  </section>
`;
