import splitbee from '@splitbee/web'

import Layout from '../../layout'

import avatar from './me.png'
import { socials } from './socials'

export default function Home() {
  splitbee.track('Open home page')

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <img src={avatar} className="w-48 h-48" alt="My low poly photo" />
        <div className="mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center">
          <p className="text-gray-900 leading-tight text-2xl md:text-3xl">
            Hello, I'm
          </p>
          <h1 className="text-gray-900 leading-tight font-semibold text-4xl md:text-5xl">
            Albert Abdulmanov.
          </h1>
        </div>
      </div>
      <p className="mt-8 text-lg leading-7 text-gray-900">
        This is my little corner on the World Wide Web.
      </p>
      <p className="mt-6 text-lg leading-7 text-gray-900">
        I'm open for conversation on{' '}
        <a className="link" href="https://twitter.com/albertmolodec/">
          Twitter
        </a>{' '}
        or{' '}
        <a className="link" href="mailto:hello@albert.works">
          hello@albert.works
        </a>
        .
      </p>
      <div className="mt-8 flex space-x-4">
        {socials.map(Social => (
          <a
            className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            href={Social.url}
          >
            <div className="sr-only">{Social.text}</div>
            <Social.icon className="h-6 w-6 inline" />
          </a>
        ))}
      </div>
    </Layout>
  )
}
