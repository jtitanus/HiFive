"use strict";

function Person() {
    this.Age = 1 + Math.round(Math.random() * 70);
    this.Partner = null;
    this.X = Math.random() * 600;
    this.Y = Math.random() * 400;
    this.STATUS_ALIVE = 1;
    this.STATUS_DEAD = 0;
    this.MALE = 0;
    this.FEMALE = 1;
    this.Status = this.STATUS_ALIVE;
    this.Sex = Math.round(Math.random());

    this.update = function() {
        this.Age += 1;

        // life expectancy -> grim reaper
        var qx = this.Age / 200;
        if (this.Status === this.STATUS_ALIVE && Math.random() < qx) {
            this.Status = this.STATUS_DEAD;
            if (this.Partner !== null) {
                this.Partner.Partner = null;
                this.Partner = null;
            }
        }
    };

    this.getColor = function() {
        var retval = "black";
        if (this.Age < 20)
            retval = "green";
        else if (this.Age < 35)
            retval = "yellow";
        else if (this.Age < 50)
            retval = "orange";
        else if (this.Age < 70)
            retval = "red";
        else if (this.Age < 100)
            retval = "brown";
        return retval;
    };

}
;

function Population(startCount) {
    this.Persons = [startCount];
    for (var i = 0; i < startCount; i++) {
        this.Persons[i] = new Person();
    }

    this.update = function() {
        for (var i = 0; i < this.Persons.length; i++) {
            this.Persons[i].update();

            // mating procedure
            if (this.Persons[i].Age >= 18) {
                if (this.Persons[i].Partner === null) {
                    var found = false;
                    for (var j = 0; !found && j < this.Persons.length; j++) {
                        if (this.Persons[j].Partner === null
                                && this.Persons[j].Sex !== this.Persons[i].Sex) {
                            if (Math.random() < 0.3) { // eternal love probability
                                this.Persons[i].Partner = this.Persons[j];
                                this.Persons[j].Partner = this.Persons[i];
                                found = true;
                            }
                        }
                    }
                }
                else {
                    // got partner -> happy fucking
                    // reproduction procedure
                    if (((this.Persons[i].Sex === this.Persons[i].FEMALE && this.Persons[i].Age < 45)
                            || (this.Persons[i].Partner.Sex === this.Persons[i].FEMALE && this.Persons[i].Partner.Age < 45))
                            && (Math.random() * 100) < 10) {
                        // success!
                        var p = new Person();
                        p.Age = 0;
                        p.X = Math.random() * 2 * ((this.Persons[i].X + this.Persons[i].Partner.X) / 2);
                        p.Y = Math.random() * 2 * ((this.Persons[i].Y + this.Persons[i].Partner.Y) / 2);
                        this.Persons[this.Persons.length] = p;
                    }
                }
            }


        }
    };

    this.draw = function(canvasContext) {
        for (var i = 0; i < this.Persons.length; i++) {
            canvasContext.beginPath();
            if (this.Persons[i].Status === this.Persons[i].STATUS_ALIVE) {
                //alive
                canvasContext.arc(this.Persons[i].X, this.Persons[i].Y, 3, 0, 2 * Math.PI, false);
                canvasContext.fillStyle = this.Persons[i].getColor();
                canvasContext.fill();
                canvasContext.lineWidth = 1;
                canvasContext.strokeStyle = '#707070';
                canvasContext.stroke();
                if (this.Persons[i].Sex === this.Persons[i].FEMALE) {
                    canvasContext.moveTo(this.Persons[i].X, this.Persons[i].Y + 3);
                    canvasContext.lineTo(this.Persons[i].X, this.Persons[i].Y + 8);
                    canvasContext.stroke();
                    canvasContext.moveTo(this.Persons[i].X - 2, this.Persons[i].Y + 6);
                    canvasContext.lineTo(this.Persons[i].X + 2, this.Persons[i].Y + 6);
                    canvasContext.stroke();
                }
                else {
                    // male
                    canvasContext.moveTo(this.Persons[i].X + 2, this.Persons[i].Y - 2);
                    canvasContext.lineTo(this.Persons[i].X + 5, this.Persons[i].Y - 5);
                    canvasContext.stroke();
                    canvasContext.moveTo(this.Persons[i].X + 5, this.Persons[i].Y - 5);
                    canvasContext.lineTo(this.Persons[i].X + 2, this.Persons[i].Y - 5);
                    canvasContext.stroke();
                    canvasContext.moveTo(this.Persons[i].X + 5, this.Persons[i].Y - 5);
                    canvasContext.lineTo(this.Persons[i].X + 5, this.Persons[i].Y - 1);
                    canvasContext.stroke();
                }

                if (this.Persons[i].Partner !== null) {
                    canvasContext.moveTo(this.Persons[i].X, this.Persons[i].Y);
                    canvasContext.lineTo(this.Persons[i].Partner.X, this.Persons[i].Partner.Y);
                    canvasContext.strokeStyle = '#AAAAAA';
                    ;
                    canvasContext.stroke();
                }
            }
            else {
                // dead
                if (this.Persons[i].Age < 200) {
                    canvasContext.lineWidth = 1;
                    canvasContext.strokeStyle = '#707070';
                    canvasContext.moveTo(this.Persons[i].X - 3, this.Persons[i].Y);
                    canvasContext.lineTo(this.Persons[i].X + 3, this.Persons[i].Y);
                    canvasContext.stroke();
                    canvasContext.moveTo(this.Persons[i].X, this.Persons[i].Y - 2);
                    canvasContext.lineTo(this.Persons[i].X, this.Persons[i].Y + 4);
                    canvasContext.stroke();
                }
            }
        }
    };
}
;
