const {
	addNote,
	getAllNotes,
	getNoteById,
	editNoteById,
	deleteNoteById,
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
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteById,
	},
	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteById,
	},
];

module.exports = routes;
