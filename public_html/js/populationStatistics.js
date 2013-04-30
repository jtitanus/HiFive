function PopulationStatistics() {

    this.OldestLivingPerson = null;
    this.P10 = 0;
    this.P20 = 0;
    this.P30 = 0;
    this.P40 = 0;
    this.P50 = 0;
    this.P60 = 0;
    this.P70 = 0;
    this.P80 = 0;
    this.P90 = 0;
    this.Iteration = 1;
    this.LivingCount = 0;
    this.DeadCount = 0;
    this.PopulationDevelopment = new Array();

    this.update = function(population) {
        var oldestPerson = null;
        this.P10 = 0;
        this.P20 = 0;
        this.P30 = 0;
        this.P40 = 0;
        this.P50 = 0;
        this.P60 = 0;
        this.P70 = 0;
        this.P80 = 0;
        this.P90 = 0;
        this.P100 = 0;
        this.LivingCount = 0;
        this.DeadCount = 0;

        for (var i = 0; i < population.Persons.length; i++) {
            var p = population.Persons[i];
            if (p.Status === p.STATUS_ALIVE) {
                this.LivingCount++;
    
                if (oldestPerson === null) {
                    oldestPerson = p;
                }
                if (p.Age > oldestPerson.Age) {
                    oldestPerson = p;
                }

                if (p.Age <= 10) {
                    this.P10++;
                }
                else if (p.Age <= 20) {
                    this.P20++;
                }
                else if (p.Age <= 30) {
                    this.P30++;
                }
                else if (p.Age <= 40) {
                    this.P40++;
                }
                else if (p.Age <= 50) {
                    this.P50++;
                }
                else if (p.Age <= 60) {
                    this.P60++;
                }
                else if (p.Age <= 70) {
                    this.P70++;
                }
                else if (p.Age <= 80) {
                    this.P80++;
                }
                else if (p.Age <= 90) {
                    this.P90++;
                }
                else
                    this.P100++;
            }
            else {
                this.DeadCount++;
            }
        }
        
        this.OldestLivingPerson = oldestPerson;
        
        this.PopulationDevelopment[this.Iteration] = this.LivingCount;
        this.Iteration++;
    };

}
;