/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Mayank Jain',
                    avatar: 'svg-1',
                    bio: 'bla bla bla....',
                    notes: [
                        { title: "cricket morning 5-7", date: new Date("2016-08-25") },
                        { title: "work from 9-6", date: new Date("2016-08-25") }
                    ]
                },
                {
                    name: 'Abhishek Jain',
                    avatar: 'svg-2',
                    bio: 'bla bla bla....',
                    notes: [
                        { title: "Office with Chaitra 7 'o' clock", date: new Date("2016-08-25") },
                        { title: "lunch with Chaitra", date: new Date("2016-08-25") }
                    ]
                },
                {
                    name: 'Mayur Jain',
                    avatar: 'svg-4',
                    bio: 'bla bla bla....',
                    notes: [
                        { title: "cricket morning 5-7", date: new Date("2016-08-25") },
                        { title: "work from 9-6", date: new Date("2016-08-25") }
                    ]
                },
                {
                    name: 'Jyothi Jain',
                    avatar: 'svg-3',
                    bio: 'bla bla bla....',
                    notes: [
                        { title: "cricket morning 5-7", date: new Date("2016-08-25") },
                        { title: "work from 9-6", date: new Date("2016-08-25") }
                    ]
                },
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map