/// <reference path="../_all.ts" />

module ContactManagerApp {
  
  export interface IUserService {
    loadAllUsers(): ng.IPromise<User[]>;
    selectedUser: User;
  }
  
  export class UserService implements IUserService {
    static $inject = ['$q'];
    
    constructor(private $q: ng.IQService) {      
    }
    
    selectedUser: User = null;
    
    loadAllUsers() : ng.IPromise<User[]> {
        return this.$q.when(this.users);
    }
    
    private users: User[] = [
      {
        name: 'Mayank Jain',
        avatar: 'svg-1',
        bio: 'bla bla bla....',
        notes: [
          { title: "cricket morning 5-7", date: new Date("2016-08-25")},
          { title: "work from 9-6", date: new Date("2016-08-25")}
        ]
      },
         {
        name: 'Abhishek Jain',
        avatar: 'svg-2',
        bio: 'bla bla bla....',
        notes: [
          { title: "Office with Chaitra 7 'o' clock", date: new Date("2016-08-25")},
          { title: "lunch with Chaitra", date: new Date("2016-08-25")}
        ]
      },
         {
        name: 'Mayur Jain',
        avatar: 'svg-4',
        bio: 'bla bla bla....',
        notes: [
          { title: "cricket morning 5-7", date: new Date("2016-08-25")},
          { title: "work from 9-6", date: new Date("2016-08-25")}
        ]
      },
         {
        name: 'Jyothi Jain',
        avatar: 'svg-3',
        bio: 'bla bla bla....',
        notes: [
          { title: "cricket morning 5-7", date: new Date("2016-08-25")},
          { title: "work from 9-6", date: new Date("2016-08-25")}
        ]
      },
   
    ];
  }
}