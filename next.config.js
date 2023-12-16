/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects: async () => {
    return [
      {
        source: `/posts/installing-composer-and-laravel-4-on-media-temple-\\(gs\\)`,
        destination:
          "/posts/installing-composer-and-laravel-4-on-media-temple-gs",
        permanent: true,
      },
      {
        source: `/posts/laravel-4-requires-php-5.3\\+`,
        destination: "/posts/laravel-4-requires-php-5.3",
        permanent: true,
      },
      {
        source: `/posts/timetable-exchange-hits-1,000-users-in-a-single-day`,
        destination:
          "/posts/timetable-exchange-hits-1-000-users-in-a-single-day",
        permanent: true,
      },
      {
        source: `/posts/using-lists\\(\\)-in-laravel-with-custom-attribute-accessors`,
        destination:
          "/posts/using-lists-in-laravel-with-custom-attribute-accessors",
        permanent: true,
      },
      {
        source: `/posts/xcode-command-line-tools-on-mac-os-x-10-9-\\(mavericks\\)`,
        destination:
          "/posts/xcode-command-line-tools-on-mac-os-x-10-9-mavericks",
        permanent: true,
      },
      {
        source: `/posts/route-currentroutename\\(\\)-in-laravel-4-1`,
        destination: "/posts/route-currentroutename-in-laravel-4-1",
        permanent: true,
      },
      {
        source: `/posts/laravel-4-php-fatal-error-call-to-undefined-method-illuminate-foundation-application-registercorecontaineraliases\\(\\)`,
        destination:
          "/posts/laravel-4-php-fatal-error-call-to-undefined-method-illuminate-foundation-application-registercorecontaineraliases",
        permanent: true,
      },
      {
        source: `/posts/custom-targeting-with-doubleclick-\\(dfp\\)`,
        destination: "/posts/custom-targeting-with-doubleclick-dfp",
        permanent: true,
      },
      {
        source: `/posts/running-laravel-through-continuous-integration-\\(ci\\)-using-circleci`,
        destination:
          "/posts/running-laravel-through-continuous-integration-using-circleci",
        permanent: true,
      },
      {
        source: `/posts/dynamic-where-clauses-and-find-methods-in-eloquent-\\(laravel-4\\)`,
        destination:
          "/posts/dynamic-where-clauses-and-find-methods-in-eloquent-laravel-4",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
