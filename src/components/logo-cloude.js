const logos = [
    { name: 'Star', url: "/assets/star.png", url_dark:"/assets/star_darktheme.png" },
    { name: 'Google', url: '/assets/google.png', url_dark:"/assets/google_darktheme.png" },
    { name: 'Star', url: "/assets/star.png", url_dark:"/assets/star_darktheme.png" },
    { name: 'Goodfirms', url: '/assets/goodfirms.png', url_dark:"/assets/goodfirms_darktheme.png" },
    { name: 'Star', url: "/assets/star.png", url_dark:"/assets/star_darktheme.png" },
    { name: 'Glassdoor', url: "/assets/glassdoor.png", url_dark:"/assets/glassdoor_darktheme.png" },
  ]
  
  const AnimatedLogoCloud = () => {
    return (
     <section className="w-full flex items-center justify-center h-full z-20">
       <div className="w-full pt-10 min-h-[28vh]">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className="px-2 h-1/2 dark:hidden"
                      alt={`${logo.name}`}
                    />
                  ))}
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url_dark}
                      className="px-2 h-1/2 hidden dark:block"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
     </section>
    )
  }
  
  export default AnimatedLogoCloud;
  