import { motionListItems } from '@/assets/animations'
import { NeuVectorSVG } from '@/assets/images'
import { VideoBox } from '@/components/VideoBox'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { PREFIX } from '@/utils/constants'

export default function Home() {
  return (
    <>
      <Head>
        <title>SLE Base Container Images</title>
        <meta name='description' content='Secure software innovation' />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/bci/favicon.ico' />
      </Head>

      <main className='grid grid-flow-row gap-8 text-sm'>
        {/** 👀 Call to Action section */}
        <div className='dark:bg-customDark bg-gray-100 relative'>
          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-3 mx-auto w-5/6 2xl:w-4/6 py-20'>
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center'>
              <div className='my-4'>
                <img className='w-90 fill-current dark:hidden my-4' src={`${PREFIX}/SLE_BCI-pos.png`} alt='' />
                <img className='w-90 fill-current hidden dark:block my-4' src={`${PREFIX}/SLE_BCI-neg.png`} alt='' />
              </div>
            </motion.div>

            <div className='col-span-2' >
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Your stable foundation for software innovation</h2>
              <p className='text-bold my-4 text-sm'>Build, deploy, and scale your applications on SUSE maintained containers that are redistributable, open source, secure and dependable.</p>
              <a href="https://registry.suse.com" className="inline-flex items-center h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-[#2453FF] rounded-lg focus:shadow-outline hover:bg-[#2453FF]">
                Get started
              </a>
            </div>

          </div>
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-3 gap-14 mb-10'>
            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Effortless</h2>
              <p className='text-bold my-4 text-sm'>Easy to use</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Use it just like any other container image in a Dockerfile or directly from our registry.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Secure</h2>
              <p className='text-bold my-4 text-sm'>Signed and attested builds.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Signed and verifiable with Sigstore&apos;s cosign. Fortressed by SUSE&apos;s robust build service.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Resilient</h2>
              <p className='text-bold my-4 text-sm'>Swift CVE responses</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Vulnerabilities happen. BCIs are continuously updated to fix known CVEs.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Stable</h2>
              <p className='text-bold my-4 text-sm'>Built on the dependability of SLE</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                With SLE BCI, ensure a rock solid foundation while keeping up with the changes in versions of technologies and/or languages.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Support</h2>
              <p className='text-bold my-4 text-sm'>Go above and beyond SLE</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                With support for BCIs running on SLE Micro, SLES, RKE2, K3s, AKS, GKE, EKS, and more, embrace true distribution agnosticity!
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Minimal</h2>
              <p className='text-bold my-4 text-sm'>Keep it simple</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Build, deploy, and run your applications with our general purpose and language stack container images.
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 How to section */}
        <div className='dark:bg-secondary-dark bg-gray-100 relative'>
          <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'>
            <p className='text-secondary-dark dark:text-primary font-light text-3xl '>
              High Quality Images <br /> Ready for Production
            </p>

            <div className='grid grid-flow-row gap-4 2xl:gap-8'>
              <p>
              SLE BCI empowers developers with a secure and reliable solution for constructing containers.
              Our containers undergo regular maintenance from SUSE Linux Enterprise Server, guaranteeing they meet high levels of security and compliance with industry standards.
              It seamlessly works with top cloud tooling like Kubernetes and Docker, offering a cohesive user experience across diverse platforms.
              </p>
            </div>
          </div>
        </div>

        {/** 👀 Getting started section */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <p className='text-2xl my-4 text-left text-secondary-dark dark:text-primary'>Getting started</p>
          <div className='grid grid-flow-row md:grid-cols-3 gap-6'>
            <div>
              <p>SLE BCI are available as OCI-compatible container images directly from registry.suse.com and can be used like any other container image</p>
            </div>
            <div>
              <p>Alternately, you can also use SLE BCI in a Dockerfile and build container images using your favorite container runtime</p>
            </div>
            <div className='flex flex-col gap-4'>
            <a href='https://opensource.suse.com/bci-docs/guides/use-with-golang/' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Build & deploy your applications
              </a>
              <a href='https://opensource.suse.com/bci-docs/guides/vscode-dev-containers/' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Use as a Dev Container
              </a>
              <a href='https://opensource.suse.com/bci-docs/guides/building-on-top-of-bci/' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Build your own custom image
              </a>
            </div>
          </div>
        </div>
        {/** 👀 Get involved */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10'>
            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get involved</p>

              <p>SLE BCI is built from following projects on GitHub:
                <ul className='list-disc list-inside'>
                  <li><a href="https://github.com/SUSE/BCI-dockerfile-generator/">BCI Dockerfile Generator</a></li>
                  <li><a href="https://github.com/SUSE/BCI-tests/">BCI testsuite</a></li>
                  <li><a href="https://github.com/SUSE/bci-docs/">BCI documentation</a></li>
                  <li><a href="https://github.com/SUSE/bci">BCI website</a></li>
                </ul>
              </p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/SUSE/BCI-dockerfile-generator/issues' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/SUSE/BCI-tests/pulls' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get support</p>

              <p>Community support is offered in the BCI GitHub discussion forum. Commercial support options are available via <a href="https://www.suse.com/products/base-container-images/">SUSE BCI</a> which is included in many SUSE product subscriptions. </p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/SUSE/bci/discussions' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  SLE BCI GitHub discussion forum
                </a>
                <a href='https://bugzilla.suse.com/enter_bug.cgi?product=PUBLIC%20SUSE%20Linux%20Enterprise%20Base%20Container%20Images' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Report an issue in Bugzilla
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
