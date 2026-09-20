(() => {
  const COOKIE_NAME = 'randomvibez_cookie_notice';
  const COOKIE_VALUE = 'accepted';
  const hasAccepted = document.cookie.split(';').some((item) => item.trim().startsWith(`${COOKIE_NAME}=${COOKIE_VALUE}`));
  if (hasAccepted) return;

  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie notice');
  banner.innerHTML = `
    <div class="cookie-banner-copy">
      <p class="cookie-banner-eyebrow">A small site note</p>
      <p class="cookie-banner-text"><strong>If you accept, RandomVibez stores one essential first-party cookie</strong> to remember that you accepted this notice on this browser. It does not track activity, measure visits, or collect personal information. You can browse normally; accepting simply hides this notice for up to one year. <a href="/privacy.html">Privacy details</a>.</p>
    </div>
    <button class="cookie-banner-accept" type="button">Accept</button>
  `;

  const accept = () => {
    const secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    banner.remove();
  };

  banner.querySelector('.cookie-banner-accept').addEventListener('click', accept);
  document.body.insertBefore(banner, document.querySelector('main') || document.body.firstChild);
})();
