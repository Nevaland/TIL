(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{383:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2020년-2월-회고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020년-2월-회고"}},[t._v("#")]),t._v(" 2020년 2월 회고")]),t._v(" "),a("p",[t._v("나는 2월 한 달을 어떻게 지냈나? 에 대한 고찰이다.")]),t._v(" "),a("h2",{attrs:{id:"공적"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공적"}},[t._v("#")]),t._v(" 공적")]),t._v(" "),a("p",[t._v("사내에서 진행했던 내용을 간략하게(?) 되새겨본다.")]),t._v(" "),a("h3",{attrs:{id:"_1-업무에-적응하는-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-업무에-적응하는-과정"}},[t._v("#")]),t._v(" 1. 업무에 적응하는 과정")]),t._v(" "),a("h4",{attrs:{id:"_1-1-개발망-부들부들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-개발망-부들부들"}},[t._v("#")]),t._v(" 1-1. 개발망(부들부들)")]),t._v(" "),a("p",[t._v("1월 말에 처음으로 배포를 했었는데 배포 과정 보단 개발망 때문에 굉장히 스트레스를 받았다.\n인터넷망과 개발망이 분리되어 있어서 배포 이후에 디버깅을 하거나 API의 정상 작동 확인 과정이 꽤 번거로웠다.\n개발망에 접근해서 curl로 직접 api을 호출 해야 하는데, 이 때 json이 한 줄로 나오기 때문에 보기가 굉장히 힘들었다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 대략 다음과 같은 형태이다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/vnd.github.v3+json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/"')]),t._v("\n")])])]),a("p",[t._v("그러면 이렇게 한 줄로 출력이 된다(사실 위와 같이 github api를 요청하면 포맷팅이 된 형태로 반환한다.)")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current_user_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current_user_authorizations_html_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/settings/connections/applications{/client_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authorizations_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/authorizations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/code?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emails_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/emails"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emojis_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/emojis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"events_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"feeds_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/feeds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followers_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/followers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"following_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/following{/target}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gists_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/gists{/gist_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hub_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/hub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"issue_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"issues_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/issues"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/keys"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notifications_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/notifications"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"organization_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/orgs/{org}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"organization_repositories_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"organization_teams_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/orgs/{org}/teams"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public_gists_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/gists/public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rate_limit_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/rate_limit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/repos/{owner}/{repo}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current_user_repositories_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/repos{?type,page,per_page,sort}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"starred_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/starred{/owner}{/repo}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"starred_gists_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/gists/starred"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/users/{user}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_organizations_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/orgs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_repositories_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("그래서 사수가 알려준 python script를 이용하여 어느 정도 응답 형태를 이쁘게 만들었다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/vnd.github.v3+json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" python -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"\nimport fileinput, json\nprint(\n    json.dumps(\n        json.loads(''.join(fileinput.input())),\n        sort_keys=True,\n        ensure_ascii=False,\n        indent=4\n    )\n)\"")]),t._v("\n")])])]),a("p",[t._v("그러면 이렇게 포맷팅이 된 결과를 출력해준다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current_user_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current_user_authorizations_html_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/settings/connections/applications{/client_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorizations_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/authorizations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/code?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit_search_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"emails_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/emails"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"emojis_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/emojis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/events"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 너무 길어서 생략")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이건 또 python으로 출력한 것이기 때문에 grep을 사용할 수 없다.\n그래서 몇 백줄이 되는 결과값에서 필요한 부분만 확인할 때 여전히 불편했으며, 확인해야 하는 API 요청이 한 개가 아니기 때문에 말 그대로 불편함 그 자체였다.")]),t._v(" "),a("blockquote",[a("p",[t._v("그러나 개발자라면 불편함을 해결할 수 있어야 한다! "),a("s",[t._v("이름하여 창조적 귀찮음")])])]),t._v(" "),a("p",[t._v("나는 위의 python script와 shell script을 결합하여 모든 요청을 한 번에 수행 후 파일로 저장하는 스크립트를 만들었다.")]),t._v(" "),a("h4",{attrs:{id:"bin-apialltestscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-apialltestscript"}},[t._v("#")]),t._v(" /bin/ApiAllTestScript")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 예시를 위하여 github로 대체")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/vnd.github.v'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${version}")]),t._v('+json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://api.github.com/'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" python -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"\nimport fileinput, json\nstr = json.dumps(json.loads(''.join(fileinput.input())), sort_keys=True, ensure_ascii=False, indent=4)\nf = open('~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${version}")]),t._v("', 'w')\nf.write(str.encode('utf-8'))\nf.close()\"")]),t._v("\n")])])]),a("h4",{attrs:{id:"bin-apialltestscript-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-apialltestscript-2"}},[t._v("#")]),t._v(" /bin/ApiAllTestScript")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path1,path2,path3,path4,path5,path6,path7,path8"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("/moduleCheck\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ApiAllTestScript "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("["),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${value}")]),t._v("]"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("/moduleCheck\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'            \"type\"'")]),t._v(" ~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${value}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'                    '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/output_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("/moduleCheck\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),a("p",[t._v("실행은 다음과 같이 하면 된다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ApiAllTestScript "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[t._v("그러면 Shell Script 에 정의된 모든 path에 대해 api 요청 후 결과를 저장하게 된다.")]),t._v(" "),a("p",[t._v("그래도 여전히.. 개발망에서 로그를 확인할 때는 여간 불편한게 아니였다.\n무엇보다 개발망에서 패키지를 설치하면 패키지 의존성이 전부 깨져있어서 원격데스크톱, vim, ssh 등의 편리한 도구들을 사용할 수 없었다.")]),t._v(" "),a("p",[t._v("패키지가 깨지는 문제 때문에 대략 5번 정도의 포맷 및 재설치를 하였으나 여전히 해결 되진 않고 있다.\n우여곡절 끝에 우분투에 내장 되어 있는 데스크톱 공유 기능을 이용하여 "),a("a",{attrs:{href:"https://extrememanual.net/12210",target:"_blank",rel:"noopener noreferrer"}},[t._v("VNC 화면 공유"),a("OutboundLink")],1),t._v(" 를 통해 원격 제어가 가능하게 되었으나, 이건 너무 느렸다.")]),t._v(" "),a("p",[t._v("내가 원하는건 아이패드로 ssh 접근을 하여 개발망을 사용하고, 블루투스 키보드를 통해서 간단하게 개발망/인터넷망을 오가며 개발하는 것이었는데.. 너무 큰 꿈인 것 같다.")]),t._v(" "),a("p",[t._v("어쨌든 몇 번의 삽질을 통해서 배포 과정에 대해서는 금방 이해할 수 있었고.. 배포가 두렵지 않게 되었다. 다만 "),a("strong",[t._v("배포 이후의 에러/버그")]),t._v("가 두려울뿐..")]),t._v(" "),a("h4",{attrs:{id:"_1-2-업무-프로세스-적응"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-업무-프로세스-적응"}},[t._v("#")]),t._v(" 1-2. 업무 프로세스 적응")]),t._v(" "),a("p",[t._v("개발 프로세스 뿐만 아니라 업무 프로세스도 중요하다. 나의 직무와 관련된 업무 프로세스는 대충 이런 형식이다.")]),t._v(" "),a("p",[t._v("기획 -> 디자인 -> 퍼블리싱 -> 개발 -> QA -> 배포")]),t._v(" "),a("p",[t._v("그런데 기획 시작부터 개발 시작까지 걸리는 시간이 꽤 길다.\n그래서 충분히 기술적인 조사가 가능하고 업무에 적용하기 위해 여러가지 테스트를 진행해볼 수 있는 여유가 있다.\n이런 점이 정말 마음에 든다.\n무엇보다 주변에 개발자로 취직했지만, 개발에 관련된 업무가 아닌 일을 하는 사람도 많이 봤기 때문에 개발에 집중할 수 있는 환경임에 감사하고 있다.")]),t._v(" "),a("h3",{attrs:{id:"_2-신규-프로젝트와-코드리뷰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-신규-프로젝트와-코드리뷰"}},[t._v("#")]),t._v(" 2. 신규 프로젝트와 코드리뷰")]),t._v(" "),a("p",[t._v("드디어 인수인계 받은 프로젝트가 아닌, 처음부터 시작하는 프로젝트를 진행 하게 되었다.\n이전에 진행 되었던 프로젝트를 참고하여 개발 환경을 구성하고 사수의 도움을 받아 프로젝트를 진행했다.")]),t._v(" "),a("p",[t._v("코어에 관련된 코드들에 기능이 조금 부족하여 임의로 추가하기도 하고, 업무가 겹치는 사람들과 논의도 하면서 꽤 재밌게 진행했다.\n일단 나는 Vue를 이용하여 CMS UI를 만들었는데 생각보다 빨리 끝나서 일단 코드리뷰를 진행했다.")]),t._v(" "),a("p",[t._v("우리 회사의경우, 프런트/백엔드가 나뉜다기 보단 각자 맡은 서비스를 풀스택으로 진행하다 누가 봐도 이해할 수 있는 코드를 작성해야만 했다.\n특히 js의 경우 너무 급격하게 변하기도 하고, java와 다르게 IDE의 지원이 있어도 설정을 제대로 하지 않으면 코드 추적히 힘들다.\n팀원들은 대부분 java에 익숙하기 때문에 여러 상황을 고려하지 않고 짜여진 JS 코드를 접하게 될 경우 멘붕이 올 수도 있는 환경이었다.\n그래서 문법은 최대한 간결하게, 그리고 java와 이질감이 없도록 구성하는게 중요했다.")]),t._v(" "),a("p",[t._v("나는 최근에 알고리즘 때문인지 쓸데없이 코드를 줄이거나 유별난 문법을 많이 사용했는데 그런 것들을 거의다 고쳐야했다.\n어쨌든 이렇게 다른 사람들과 내가 작성한 코드에 대해 토의할 수 있어서 재밌었고 뜻 깊은 경험이었다.")]),t._v(" "),a("h3",{attrs:{id:"_4-재택근무"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-재택근무"}},[t._v("#")]),t._v(" 4. 재택근무")]),t._v(" "),a("p",[t._v("무탈없이 끝나겠구나 싶었더 코로나19가 하루 아침에 확진자가 증가하면서 재택근무를 시작하게 되었다.\n덕분에 VPN이나 원격접속 설정을 제대로 해놓지 않으면 근무를 할 수 없는 상황이었는데..\n재택근무 첫 날 부터 회사 컴퓨터에 접속이 되지 않아 결국 출근을 하여 이것 저것 설정하고 왔다.")]),t._v(" "),a("p",[t._v("그리고 개발망과 인터넷망이 분리 되어있었기 때문에 배포가 있는 날에는 여러모로 불편함을 느꼈다.")]),t._v(" "),a("h2",{attrs:{id:"사적"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사적"}},[t._v("#")]),t._v(" 사적")]),t._v(" "),a("h3",{attrs:{id:"얼떨결에-집사"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#얼떨결에-집사"}},[t._v("#")]),t._v(" 얼떨결에 집사")]),t._v(" "),a("p",[t._v("몇 개월동안 밥을 주고 있던 길냥이들을 하룻밤 집에서 재웠더니 맨날 맨날 집앞으로 찾아온다.\n퇴근하고 오면 문앞에 옹기종기 모여 앉아 있다 보니까 집도 구해주고, 화장실도 만들어주고, 밥도 주고, 그렇게 집사 아닌 집사가 되어버렸다.\n문제는 고양이 5마리가 똥을 "),a("s",[t._v("오지게 우라지게 겁나게")]),t._v(" 많이 싼다.")]),t._v(" "),a("p",[t._v("원래 집에 도착하면 바로 밥먹고 코딩을 했는데 이제 집에 오면 밥먹기전에 고양이들 응가부터 치우고 있다.\n거기다가 냥이들이 잠깐만 문을 열어놔도 자꾸 집에 들어와서 냥이들이 나가면 지저분해진 집을 반 강제적으로 청소하고 있다.")]),t._v(" "),a("p",[t._v("그래도 귀여운 냥이들을 보고 있으면 하루의 스트레스가 풀리는 느낌! "),a("s",[t._v("(그리고 똥과 청소로 스트레스 적립)")])]),t._v(" "),a("h3",{attrs:{id:"수영-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수영-시작"}},[t._v("#")]),t._v(" 수영 시작")]),t._v(" "),a("p",[t._v("우리 팀원들은 대부분 운동을 한다. 헬스를 하는 사람도 있고, 테니스나 배드민턴을 하는 사람도 있고,\n집에서 그냥 닌텐도로 운동하는 사람도 있다.\n그래서 운동 얘기를 많이 하는데 "),a("a",{attrs:{href:"https://ryan-han.com/post/memoirs/memoirs2019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("체대 출신 개발자"),a("OutboundLink")],1),t._v(" 분께서\n수영이 하루종일 앉아있는 개발자들에게 참 좋은 운동이라고 알려주셨다.")]),t._v(" "),a("p",[t._v("요즘 목도 아프고 어깨도 아프고 해서 수영을 시작하기로 마음먹고 회사 앞에 있는 "),a("a",{attrs:{href:"http://www.phspo.com/cmm/main/mainPage.do",target:"_blank",rel:"noopener noreferrer"}},[t._v("평화 스포 웰빙"),a("OutboundLink")],1),t._v(" 에 수영 강습을 등록했다.")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("[1개월][월/수/금 1시간 강습][12만원]")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("[6개월][월/수/금 1시간 강습 + 화/목 1시간 자유수영 + 찜질방][80만원]")])])])]),t._v(" "),a("p",[t._v("둘 중에 고민하다가 일단 한 달만 했는데, 결과적으로 코로나 덕분에 합리적인 선택이 되었다.")]),t._v(" "),a("p",[t._v("확실히 수영을 하니까 몸도 펴지고 아픈 곳도 없고 몸이 개운했는데.. 재택근무때문에 맛보기만 한 것 같다.\n그리고 오전 6시 30분 ~ 7시 20분 강습이라서 월/수/금에는 최소 오전 5시 30분에 집에서 출발해야 했다.\n일찍 일어나서 운동을, 다름아닌 수영을 하고 출근하니까 오전에 너무 피곤해서 힘들었다.\n재택근무가 끝나면 다시 꾸준히 참여해서 체력도 키우고 건강좀 유지하자!")]),t._v(" "),a("h3",{attrs:{id:"사이드-프로젝트-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사이드-프로젝트-시작"}},[t._v("#")]),t._v(" 사이드 프로젝트 시작")]),t._v(" "),a("p",[t._v("일일커밋의 좋은 양분은 역시 사이드 프로젝트가 아닐까 싶다.\nTIL의 경우 손이 많이 가기도 하고, 원체 정리하는걸 그렇게 좋아하는 성격이 아니다 보니 꾸준히 하기가 힘들었다.\n그래서 사이드 프로젝트를 시작했다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/JunilHwang/DKU-Software-Engineering-Logging-Service",target:"_blank",rel:"noopener noreferrer"}},[t._v("단국대학교 소프트웨어학과 학생들(혹은 개발자)을 위한 서비스"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("내가 졸업한 단국대 소프트웨어학과의 경우, 학생들간의 교류가 너무 없는 상태이다.\n학교에서는 정부의 지원을 받아 소프트웨어 특성화를 추진하고 있고, 학생은 많아지고 있다.\n그것 까진 좋은데, 문제는 선후배간의 교류도 없고, 동아리도 없고, 수업도 부족하고, 교수님도 별로 안계신다.")]),t._v(" "),a("p",[t._v("결국 정보가 필요한 사람은 많은데 정보를 제공해줄 사람은 없기 때문에 악순환이 계속 발생한다.\n왜 공부하는지도 모르는 상태에서 공부를 하는 사람이 태반인 것이다.")]),t._v(" "),a("p",[t._v("이런 점을 해소하고자 만드는 서비스인데, 일단 Github가 필요하다.\nGithub에 markdown 파일을 올리고, 그걸 이 서비스에 포스트로 등록하는 것이다.\n링크로 등록할 수도 있고, 혹은 API를 이용하여 등록할 수도 있다.")]),t._v(" "),a("p",[t._v("한 번 등록하면 github hook을 이용하여 커밋이 발생했을 때 해당 포스트를 자동으로 업데이트 하는 형식으로 만들 생각이다.\n항상 GitHub에 무언가를 기록할 때 다른 서비스에도 노출 시키고 싶었는데 어떻게 할까 고민하다가 이런식으로 만들면 좋겠다고 생각했다.")]),t._v(" "),a("p",[t._v("그리고 Github 활동의 활성화를 위해 랭킹 시스템이나 서로 진행하고 있는 프로젝트를 공유한다던가 하는 기능을 추가해보는 것도 좋을 것 같다.")]),t._v(" "),a("p",[t._v("여튼 핵심은 GitHub다. GitHub의 중요성은 아무리 강조해도 부족하지 않은 것 같다.")]),t._v(" "),a("h3",{attrs:{id:"독서-스프링-입문을-위한-자바-객체지향의-이해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#독서-스프링-입문을-위한-자바-객체지향의-이해"}},[t._v("#")]),t._v(" 독서 - 스프링 입문을 위한 자바 객체지향의 이해")]),t._v(" "),a("p",[t._v("스프링에 대해 공부할 때 "),a("a",{attrs:{href:"https://expert0226.tistory.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여름나라 겨울이야기"),a("OutboundLink")],1),t._v(" 라는 블로그의 글을 재밌게 읽었었다.\n그리고 최근에 다시 읽었는데, 이 블로그 주인장님이 블로그에 쓴 내용을 바탕으로 책을 쓰셨다.\n그래서 주저 없이 구매했고, 하루만에 다 읽었다.")]),t._v(" "),a("p",[t._v("객체지향을 이보다 더 쉽게 설명할 수 있을까? 싶을 정도로 간결하게 그리고 정확하게 기술하였다.")]),t._v(" "),a("p",[t._v("이 책의 내용을 잘 정리하고 싶은데.. 요즘 TIL에 손이 가지 않고 있어서 문제다.")]),t._v(" "),a("h3",{attrs:{id:"코덕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코덕"}},[t._v("#")]),t._v(" 코덕")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://co-duck.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("코덕"),a("OutboundLink")],1),t._v(" 이라는 사이트가 있는 것을 알고 바로 회원가입을 했다.")]),t._v(" "),a("p",[t._v("2월은 11등으로 마무리할 듯 싶다. 다음 달에는 top10 안에 들어가는 것이 목표! 가능하다면 1등을 노려보자.")]),t._v(" "),a("p",[t._v("이렇게 소소한 자극이 있어야 공부할 때 즐거움을 느끼는 것 같다.")]),t._v(" "),a("h3",{attrs:{id:"함수형-프로그래밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수형-프로그래밍"}},[t._v("#")]),t._v(" 함수형 프로그래밍")]),t._v(" "),a("p",[t._v("인프런에서 유인동님의 함수형 프로그래밍 강의를 들었다.\n딱히 따라하진 않고 그냥 쭉 봤는데 생각보다 너무 재밌었다.\n아직 객체지향의 개념이나 디자인 패턴도 익숙하지 않기 때문에 일단 객체지향부터 잘 숙지 한 다음\n함수형 프로그래밍도 곱씹어 먹어야겠다.")]),t._v(" "),a("h3",{attrs:{id:"the-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-java"}},[t._v("#")]),t._v(" The Java")]),t._v(" "),a("p",[t._v("인프런에서 백기선님의 The Java 수업을 들었는데, 꽤 재미있게 들었다.\n이것도 모르고 Java를 사용한게 참 바보 같기도 하고.. 뭔가 자괴감도 들고 그랬다.")]),t._v(" "),a("h3",{attrs:{id:"아쉬운-점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#아쉬운-점"}},[t._v("#")]),t._v(" 아쉬운 점")]),t._v(" "),a("p",[t._v("사이드 프로젝트를 시작하면서 TIL에 쓰는 내용이 급격하게 감소했다.\n일단 사이트 프로젝트를 잘 마무리 한 다음 TIL에 투자하는 방식으로 해야겠다.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("ul",[a("li",[t._v("사이드 프로젝트 진행 중")]),t._v(" "),a("li",[t._v("2월 독서 완료")]),t._v(" "),a("li",[t._v("업무 프로세스 숙지 완료")]),t._v(" "),a("li",[t._v("재택근무")])])])}),[],!1,null,null,null);s.default=e.exports}}]);