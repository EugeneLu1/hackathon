/* istanbul ignore file */
import '@babel/polyfill';

declare const window: any;

const { vci } = window;

if (vci && vci.init) {
  vci.init(
    ['ajax', 'errorPage', 'icmClient', 'jquery', 'react'],
    () => {
      vci.require(['errorPage'], errorPage => {
        window.jQuery.vci.importReact = vci.importReact;
        window.jQuery.vci.requireLang = vci.requireLang;
        window.jQuery.vci.errorPage = errorPage;
        import('./app');
      });
    },
    {
      acceptLanguage: 'en-US',
      allowPseudoLoc: true,
      useJQueryShim: false,
    },
  );
}
