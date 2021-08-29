class Hero {
    constructor(name) {
        this.name = name;
    }
}

//The class Team provides the second class and only array required by the assignment.

class Team {
    constructor(name) {
        this.name = name;
        this.heros = [];
    }

    addHero(hero) {
        if (hero instanceof Hero) {
            this.heros.push(hero)
        } else { 
                throw new Error('You cna only add an instance of hero. Argument is not a heros: ${hero}');
            }
    }

        describe() {
         return `${this.name} has ${this.heros.length} members.`
        }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions() ;
            while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                break;
                case '2':
                    this.viewTeam();
                break;
                case '3':
                    this.deleteTeam();
                break;
                case '4':
                    this.displayTeams();
                break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Adios, amigo!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Team
        2) View Team
        3) Delete Team
        4) Display All teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) Back
        1) Add Member
        2) Remove Member
        *******************************
        *******************************
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString); 
    }

    createTeam() {
        let name = prompt('Enter new team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the number of the team you wish to view:' + '\n');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name  + '\n';

            for (let i = 0; i < this.selectedTeam.heros.length; i++) {
                description += i + ') ' + this.selectedTeam.heros[i].name + '\n';
            }

           let selection = this.showTeamMenuOptions(description);

             switch (selection) {
                 case '1' :
                     this.createHero();
                     break;
                  case '2':
                      this.deleteHero();
           }
        }
    }   

    deleteTeam() {
        let index = prompt('Enter the number of the team you want removed: ')
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
            
    }

    createHero() {
        let name = prompt('Enter name of new member:');
        this.selectedTeam.heros.push(new Hero(name));
    }

    deleteHero() {
        let index = prompt('Enter the number of the member you want removed:');
        if (index > -1 && index < this.selectedTeam.heros.length) {
            this.selectedTeam.heros.splice(index, 1);
        }
    }

}


let menu = new Menu();
menu.start();

