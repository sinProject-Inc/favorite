import { App } from '$lib/app/app'
import type { RequestHandler } from '@sveltejs/kit'

enum Roles {
	admin = 'admin',
	user = 'user',
}

export const GET: RequestHandler = async () => {
	const db = App.db

	try {
		await db.roles.create({ data: { name: 'admin' } })
		await db.roles.create({ data: { name: 'user' } })

		await db.appSettings.create({ data: { key: 'session_lifetime_sec', value: '600' } })
		await db.appSettings.create({ data: { key: 'pin_code_lifetime_sec', value: '300' } })

		await db.users.create({
			data: { email: 'jitewaboh@lagify.com', name: 'test_user', role: { connect: { name: Roles.user } } },
		})

		await db.posts.create({
			data: {
				created_at: new Date(Date.now()),
				updated_at: new Date(Date.now()),
				detail: 'This is a sample post. #sample #post',
				user: { connect: { id: 1 } },
			},
		})

		await db.posts.create({
			data: {
				created_at: new Date(Date.now() - 100000),
				updated_at: new Date(Date.now() - 100000),
				detail: 'This is another sample post. #sample #post',
				user: { connect: { id: 1 } },
			},
		})

		return new Response('Success')
	} catch (error) {
		console.error(error)
		return new Response('Error')
	}
}
