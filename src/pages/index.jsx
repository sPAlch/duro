import React from "react"
import { Redirect } from '@reach/router'

const navLang = process.browser ? ( navigator.language || navigator.userLanguage ) : 'en'
const lang = navLang.split('-')[0]
const SITE_MAP = ['en', 'zh']

const IndexPage = () => (
	<Redirect noThrow to={ SITE_MAP.indexOf(lang) > -1 ? lang : SITE_MAP[0]} />
)

export default IndexPage
