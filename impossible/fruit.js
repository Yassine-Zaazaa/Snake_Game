function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.beginPath();
        ctx.lineWidth = "2"
        ctx.strokeStyle = "black";
        ctx.fillStyle = "yellow"
        ctx.strokeRect(this.x, this.y, scale, scale);
        ctx.fillRect(this.x, this.y, scale, scale);
        }
    }