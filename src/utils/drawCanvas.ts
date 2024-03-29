interface Icoordinates {
    x: number;
    y: number;
};

export function drawCanvas(dom: HTMLCanvasElement) {
        if (!dom) {
            return;
        }
        var c = dom,
          x = dom.getContext("2d")!,
          pr = window.devicePixelRatio || 1,
          w = window.innerWidth,
          h = window.innerHeight,
          f = 90,
          q: Icoordinates[],
          m = Math,
          r = 0,
          u = m.PI * 2,
          v = m.cos,
          z = m.random;
        c.width = w * pr;
        c.height = h * pr;
        x.scale(pr, pr);
        x.globalAlpha = 0.6;
  
        function evanyou() {
          x.clearRect(0, 0, w, h);
          q = [
            {
              x: 0,
              y: h * 0.7 + f
            },
            {
              x: 0,
              y: h * 0.7 - f
            }
          ];
          while (q[1].x < w + f) {
            d(q[0], q[1]);
          }
        }
  
        function d(e:Icoordinates, b:Icoordinates) {
          x.beginPath();
          x.moveTo(e.x, e.y);
          x.lineTo(b.x, b.y);
          var a = b.x + (z() * 2 - 0.25) * f,
            g = y(b.y);
          x.lineTo(a, g);
          x.closePath();
          r -= u / -50;
          x.fillStyle =
            "#" +
            (
              ((v(r) * 127 + 128) << 16) |
              ((v(r + u / 3) * 127 + 128) << 8) |
              (v(r + (u / 3) * 2) * 127 + 128)
            ).toString(16);
          x.fill();
          q[0] = q[1];
          q[1] = {
            x: a,
            y: g
          };
        }
  
        function y(b: number): number {
          var a = b + (z() * 2 - 1.1) * f;
          return a > h || a < 0 ? y(b) : a;
        }
        document.onclick = evanyou;
        document.ontouchstart = evanyou;
        evanyou();
      
}