



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>FitVids.js/jquery.fitvids.js at master · davatron5000/FitVids.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davatron5000/FitVids.js" name="twitter:title" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=3&amp;s=400" property="og:image" /><meta content="davatron5000/FitVids.js" property="og:title" /><meta content="https://github.com/davatron5000/FitVids.js" property="og:url" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="45B09BA0:626C:54F134A:5693319C" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="168e8fd2622ddf221652b8e4f82ea0e801a3cb04" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2cd8e7b7c650541e94a142c9c10fb231b81455e1777c62510eb9b3402cc220b3.css" integrity="sha256-LNjnt8ZQVB6UoULJwQ+yMbgUVeF3fGJRDrmzQCzCILM=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-ceee0e6040d1030b365b8e3d7b8253580a1b367dd5a04caac69de46b320ad095.css" integrity="sha256-zu4OYEDRAws2W449e4JTWAobNn3VoEyqxp3kazIK0JU=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3fa31291a3392c21fe713562c40f1dcc">

      
  <meta name="description" content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.">
  <meta name="go-import" content="github.com/davatron5000/FitVids.js git https://github.com/davatron5000/FitVids.js.git">

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="2310615" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2310615" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitVids.js/commits/master.atom" rel="alternate" title="Recent Commits to FitVids.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fdavatron5000%2FFitVids.js%2Fblob%2Fmaster%2Fjquery.fitvids.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/davatron5000/FitVids.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/davatron5000/FitVids.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/davatron5000/FitVids.js/watchers">
    201
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/davatron5000/FitVids.js/stargazers">
      4,097
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/davatron5000/FitVids.js/network" class="social-count">
      941
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/davatron5000/FitVids.js" data-pjax="#js-repo-pjax-container">FitVids.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/davatron5000/FitVids.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /davatron5000/FitVids.js">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/davatron5000/FitVids.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /davatron5000/FitVids.js/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">16</span>
</a>
  <a href="/davatron5000/FitVids.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /davatron5000/FitVids.js/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">10</span>
</a>
    <a href="/davatron5000/FitVids.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /davatron5000/FitVids.js/wiki">
      <span aria-hidden="true" class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/davatron5000/FitVids.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /davatron5000/FitVids.js/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/davatron5000/FitVids.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /davatron5000/FitVids.js/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/davatron5000/FitVids.js/blob/96be0cf901cd7cdabab58b952fd534c8d2d03951/jquery.fitvids.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:9d09e4e0360948076b293b4bd2762f54 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/blob/develop/jquery.fitvids.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davatron5000/FitVids.js/blob/gh-pages/jquery.fitvids.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/davatron5000/FitVids.js/blob/master/jquery.fitvids.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/davatron5000/FitVids.js/tree/v1.1.0/jquery.fitvids.js"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/davatron5000/FitVids.js/tree/v1.0.3/jquery.fitvids.js"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/davatron5000/FitVids.js/tree/v1.0.2/jquery.fitvids.js"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/davatron5000/FitVids.js/tree/v1.0.1/jquery.fitvids.js"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/davatron5000/FitVids.js/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitVids.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">FitVids.js</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.fitvids.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/davatron5000/FitVids.js/commit/0e9f3035ed69ac6010bd09402c93e8fb443e881f" data-pjax>
          0e9f303
        </a>
        <time datetime="2015-02-13T21:25:17Z" is="relative-time">Feb 13, 2015</time>
      </span>
      <div>
        <img alt="@arthurvr" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6025224?v=3&amp;s=40" width="20" />
        <a href="/arthurvr" class="user-mention" rel="contributor">arthurvr</a>
          <a href="/davatron5000/FitVids.js/commit/0e9f3035ed69ac6010bd09402c93e8fb443e881f" class="message" data-pjax="true" title="Remove unnecessary JSHint global variable declaration">Remove unnecessary JSHint global variable declaration</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>17</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="davatron5000" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=davatron5000"><img alt="@davatron5000" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/42218?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arthurvr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=arthurvr"><img alt="@arthurvr" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6025224?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chriscoyier" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=chriscoyier"><img alt="@chriscoyier" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/69156?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kenhowardpdx" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=kenhowardpdx"><img alt="@kenhowardpdx" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1892667?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elliotttf" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=elliotttf"><img alt="@elliotttf" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/447151?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="seriouslysean" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=seriouslysean"><img alt="@seriouslysean" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/414475?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JacobBennett" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=JacobBennett"><img alt="@JacobBennett" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1517011?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="freakdesign" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=freakdesign"><img alt="@freakdesign" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1378665?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jrobson153" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=jrobson153"><img alt="@jrobson153" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6475336?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="quayzar" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=quayzar"><img alt="@quayzar" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1156664?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="flynfish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=flynfish"><img alt="@flynfish" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/253936?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="emiluzelac" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=emiluzelac"><img alt="@emiluzelac" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1784526?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Krinkle" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=Krinkle"><img alt="@Krinkle" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/156867?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="AdamScheller" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=AdamScheller"><img alt="@AdamScheller" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/10998433?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstarr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=sstarr"><img alt="@sstarr" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/18957?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mohnish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=mohnish"><img alt="@mohnish" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/138171?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="adamfairholm" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=adamfairholm"><img alt="@adamfairholm" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/298239?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@davatron5000" height="24" src="https://avatars3.githubusercontent.com/u/42218?v=3&amp;s=48" width="24" />
            <a href="/davatron5000">davatron5000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arthurvr" height="24" src="https://avatars3.githubusercontent.com/u/6025224?v=3&amp;s=48" width="24" />
            <a href="/arthurvr">arthurvr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chriscoyier" height="24" src="https://avatars0.githubusercontent.com/u/69156?v=3&amp;s=48" width="24" />
            <a href="/chriscoyier">chriscoyier</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kenhowardpdx" height="24" src="https://avatars2.githubusercontent.com/u/1892667?v=3&amp;s=48" width="24" />
            <a href="/kenhowardpdx">kenhowardpdx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@elliotttf" height="24" src="https://avatars1.githubusercontent.com/u/447151?v=3&amp;s=48" width="24" />
            <a href="/elliotttf">elliotttf</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@seriouslysean" height="24" src="https://avatars1.githubusercontent.com/u/414475?v=3&amp;s=48" width="24" />
            <a href="/seriouslysean">seriouslysean</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JacobBennett" height="24" src="https://avatars3.githubusercontent.com/u/1517011?v=3&amp;s=48" width="24" />
            <a href="/JacobBennett">JacobBennett</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@freakdesign" height="24" src="https://avatars3.githubusercontent.com/u/1378665?v=3&amp;s=48" width="24" />
            <a href="/freakdesign">freakdesign</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jrobson153" height="24" src="https://avatars3.githubusercontent.com/u/6475336?v=3&amp;s=48" width="24" />
            <a href="/jrobson153">jrobson153</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@quayzar" height="24" src="https://avatars1.githubusercontent.com/u/1156664?v=3&amp;s=48" width="24" />
            <a href="/quayzar">quayzar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@flynfish" height="24" src="https://avatars3.githubusercontent.com/u/253936?v=3&amp;s=48" width="24" />
            <a href="/flynfish">flynfish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@emiluzelac" height="24" src="https://avatars0.githubusercontent.com/u/1784526?v=3&amp;s=48" width="24" />
            <a href="/emiluzelac">emiluzelac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Krinkle" height="24" src="https://avatars2.githubusercontent.com/u/156867?v=3&amp;s=48" width="24" />
            <a href="/Krinkle">Krinkle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@AdamScheller" height="24" src="https://avatars0.githubusercontent.com/u/10998433?v=3&amp;s=48" width="24" />
            <a href="/AdamScheller">AdamScheller</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sstarr" height="24" src="https://avatars1.githubusercontent.com/u/18957?v=3&amp;s=48" width="24" />
            <a href="/sstarr">sstarr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mohnish" height="24" src="https://avatars2.githubusercontent.com/u/138171?v=3&amp;s=48" width="24" />
            <a href="/mohnish">mohnish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@adamfairholm" height="24" src="https://avatars2.githubusercontent.com/u/298239?v=3&amp;s=48" width="24" />
            <a href="/adamfairholm">adamfairholm</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/davatron5000/FitVids.js/raw/master/jquery.fitvids.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/davatron5000/FitVids.js/blame/master/jquery.fitvids.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      83 lines (71 sloc)
      <span class="file-info-divider"></span>
    3.15 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*jshint browser:true */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* FitVids 1.1</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Released under the WTFPL license - http://sam.zoy.org/wtfpl/</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>( <span class="pl-smi">$</span> ){</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">fitVids</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> settings <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      customSelector<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">      ignore<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fit-vids-style<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> head <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-smi">head</span> <span class="pl-k">||</span> <span class="pl-smi">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> css <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">div</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;x&lt;/p&gt;&lt;style id=&quot;fit-vids-style&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> css <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/style&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">div</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( options ) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( settings, options );</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> selectors <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iframe[src*=&quot;player.vimeo.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iframe[src*=&quot;youtube.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iframe[src*=&quot;youtube-nocookie.com&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>iframe[src*=&quot;kickstarter.com&quot;][src*=&quot;video.html&quot;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>embed<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      ];</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">settings</span>.<span class="pl-smi">customSelector</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">selectors</span>.<span class="pl-c1">push</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">customSelector</span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> ignoreList <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.fitvidsignore<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">ignore</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        ignoreList <span class="pl-k">=</span> ignoreList <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">settings</span>.<span class="pl-smi">ignore</span>;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> $allVideos <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">find</span>(<span class="pl-smi">selectors</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">      $allVideos <span class="pl-k">=</span> <span class="pl-smi">$allVideos</span>.<span class="pl-en">not</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>object object<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// SwfObj conflict patch</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      $allVideos <span class="pl-k">=</span> <span class="pl-smi">$allVideos</span>.<span class="pl-en">not</span>(ignoreList); <span class="pl-c">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$allVideos</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">count</span>){</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">$this</span>.<span class="pl-en">parents</span>(ignoreList).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span>; <span class="pl-c">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-c1">tagName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>embed<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$this</span>.<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-smi">$this</span>.<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((<span class="pl-k">!</span><span class="pl-smi">$this</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">$this</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">isNaN</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">||</span> <span class="pl-c1">isNaN</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>))))</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">9</span>);</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> height <span class="pl-k">=</span> ( <span class="pl-v">this</span>.<span class="pl-c1">tagName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> (<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-c1">parseInt</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>))) ) <span class="pl-k">?</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">height</span>(),</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">            width <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-c1">parseInt</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>)) <span class="pl-k">?</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>) <span class="pl-k">:</span> <span class="pl-smi">$this</span>.<span class="pl-c1">width</span>(),</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            aspectRatio <span class="pl-k">=</span> height <span class="pl-k">/</span> width;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> videoID <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fitvid<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> count;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>, videoID);</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$this</span>.<span class="pl-en">wrap</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;fluid-width-video-wrapper&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.fluid-width-video-wrapper<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>padding-top<span class="pl-pds">&#39;</span></span>, (aspectRatio <span class="pl-k">*</span> <span class="pl-c1">100</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$this</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Works with either jQuery or Zepto</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">})( <span class="pl-smi">window</span>.<span class="pl-smi">jQuery</span> <span class="pl-k">||</span> <span class="pl-smi">window</span>.<span class="pl-smi">Zepto</span> );</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.05012s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-CXm9s4pSEWmhMcvB1kgYF4aOPzr9ntBNjTtYHu1zktE=" src="https://assets-cdn.github.com/assets/github-0979bdb38a521169a131cbc1d6481817868e3f3afd9ed04d8d3b581eed7392d1.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

