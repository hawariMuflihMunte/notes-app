const {
	getAllNotes,
	addNote,
	getNoteById,
} = require('./handler/handler');

const routes = [
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotes,
	},
	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteById,
	},
	{
		method: 'POST',
		path: '/notes',
		handler: addNote,
	},
];

module.exports = routes;
