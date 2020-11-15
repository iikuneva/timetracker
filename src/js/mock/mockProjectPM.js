const projectsData = [
    {
        name: 'Neuralink',
        projectId: '1',
        manager: 'Jared Birchall',
        client: 'Neuralink Corporation',
        description: 'Neuralink aims to implant wireless brain-computer interfaces to help cure neurological conditions and injuries and ultimately fuse humankind with artificial intelligence',
        tasks: [
            { title: 'Implement Home page', assignee: 'Sara Bareilles, David Flanagan', dueDate: '23.11.2020', tracked: '11', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Login page', assignee: 'Sara Bareilles, Mark Piller', dueDate: '20.12.2020', tracked: '12', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Register page', assignee: 'Sara Bareilles', dueDate: '11.11.2020', tracked: '13', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement User page', assignee: 'Douglas Crockford, Sara Bareilles', dueDate: '12.11.2020', tracked: '14', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Admin page', assignee: 'Brendan Eich, Sara Bareilles, Danny Goodman, Mark Piller', dueDate: '13.11.2020', tracked: '15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Guest page', assignee: 'Kyle Simpson, Sara Bareilles, Danny Goodman', dueDate: '14.11.2020', tracked: '16', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Contact page', assignee: 'Sara Bareilles', dueDate: '15.11.2020', tracked: '17', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement About page', assignee: 'Sara Bareilles', dueDate: '16.11.2020', tracked: '18', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Project page', assignee: 'Kyle Simpson, Sara Bareilles', dueDate: '17.11.2020', tracked: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
        ],
        upcomingTasks: '4',
        inProgressTasks: '3',
        finishedTasks: '2'
    },
    {
        name: 'HyperLoop',
        projectId: '2',
        manager: 'Elon Musk',
        client: 'Tesla Motors',
        description: 'Hyperloop is a sealed tube or system of tubes with low air pressure through which a pod may travel substantially free of air resistance or friction',
        tasks: [
            { title: 'Implement Home page', assignee: 'Sara Bareilles, David Flanagan', dueDate: '23.11.2020', tracked: '11', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Login page', assignee: 'Sara Bareilles, Mark Piller', dueDate: '20.12.2020', tracked: '12', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Register page', assignee: 'Sara Bareilles', dueDate: '11.11.2020', tracked: '13', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement User page', assignee: 'Douglas Crockford, Sara Bareilles', dueDate: '12.11.2020', tracked: '14', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Admin page', assignee: 'Brendan Eich, Sara Bareilles, Danny Goodman, Mark Piller', dueDate: '13.11.2020', tracked: '15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Guest page', assignee: 'Kyle Simpson, Sara Bareilles, Danny Goodman', dueDate: '14.11.2020', tracked: '16', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Contact page', assignee: 'Sara Bareilles', dueDate: '15.11.2020', tracked: '17', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement About page', assignee: 'Sara Bareilles', dueDate: '16.11.2020', tracked: '18', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Implement Project page', assignee: 'Kyle Simpson, Sara Bareilles', dueDate: '17.11.2020', tracked: '19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
        ],
        upcomingTasks: '2',
        inProgressTasks: '3',
        finishedTasks: '4'
    }
]

export default projectsData