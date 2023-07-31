import { motionListItems } from '@/assets/animations'
import { NeuVectorSVG } from '@/assets/images'
import { VideoBox } from '@/components/VideoBox'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SLE Base Container Images</title>
        <meta name='description' content='Minimal SUSE Linux Enterprise Server 15-based images that you can use to develop, deploy, and share applications' />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/bci/favicon.ico' />
      </Head>

      <main className='grid grid-flow-row gap-8 text-sm'>
        {/** 👀 Call to Action section */}
        <div className='dark:bg-customDark bg-gray-100 relative'>
          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-3 mx-auto w-5/6 2xl:w-4/6 py-20'>
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center'>
              <div className='my-4'>
                <img className='w-90 fill-current dark:hidden my-4' src='/bci/SLE_BCI-pos.png' alt='' />
                <img className='w-90 fill-current hidden dark:block my-4' src='/bci/SLE_BCI-neg.png' alt='' />
              </div>
              <p className='text-2xl font-thin text-left text-secondary-dark dark:text-primary'>Base containers to build and run your applications</p>

              <p className='mt-4'>
                Secure supply chain. Designed to be minimal. Base and programming language images. Use under your applications and in CI.
              </p>
            </motion.div>

            <div className='col-span-2'>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>TBD</h2>
              <p className='text-bold my-4 text-sm'>More TBD</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
            </div>

          </div>
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-3 gap-14 mb-10'>
            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Easy To Use</h2>
              <p className='text-bold my-4 text-sm'>Use like other popular base images.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Use in your Dockerfiles and with common tools like Visual Studio Code or Docker. 
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Supply Chain Security</h2>
              <p className='text-bold my-4 text-sm'>Secure, signed, and attested builds.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Built using SUSE&apos;s build service which is designed to meet some of the strictest secure build certifications. Signed and verifiable with Sigstore&apos;s cosign.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Fast CVE Responses</h2>
              <p className='text-bold my-4 text-sm'>Continuously updated with vulnerability fixes.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Vulnerabilities happen. BCIs are continuously updated to fix known CVEs. The same policy that applies to SLE applies to these BCIs.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Stable</h2>
              <p className='text-bold my-4 text-sm'>Built on the stability of SLE</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Stability in your environment matters. With the base and language images you get a stability underlying environment while being able to keep up language versions.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Supported</h2>
              <p className='text-bold my-4 text-sm'>Support that goes beyond SLE</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                You can get support for the BCIs running on SLE Micro, SLES, RKE2, K3s, AKS, GKE, EKS, and more.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Small</h2>
              <p className='text-bold my-4 text-sm'>Small images available.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Small images are a focus with sizes that are often smaller than direct competitors. That includes language images.
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 How to section */}
        <div className='dark:bg-secondary-dark bg-gray-100 relative'>
          <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'>
            <p className='text-secondary-dark dark:text-primary font-light text-3xl '>
              Container Security from Pipeline <br /> to Production
            </p>

            <div className='grid grid-flow-row gap-4 2xl:gap-8'>
              <p>
                Open Zero Trust is the only kubernetes-native container security platform that delivers complete container security. Our end-to-end vulnerability management gives you a continuous risk profile on known threats. Our patented container firewall technology starts blocking on Day 1 to protect your infrastructure from known and unknown
                threats. Our behavioral learning and Security as Code automation processes improve the flow between development and security. Integrating policy helps prevent future exposure.
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
              <a href='https://github.com/neuvector/neuvector-helm' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Deploy Using Helm Charts
              </a>
              <a href='https://open-docs.neuvector.com/deploying/kubernetes' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Deploy on Kubernetes
              </a>
              <a href='https://open-docs.neuvector.com/deploying/production/operators ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                OpenShift Operator
              </a>
            </div>
          </div>
        </div>
        {/** 👀 Get involved */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10'>
            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get involved</p>

              <p>OpenZeroTrust is an open source project hosted on GitHub.</p>
              <p>Bugs and features are tracked through issues and new code is reviewed through pull requests.</p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get support</p>

              <p>Found an issue or have a problem? Community support happens in the #openzerotrust channel in Slack and in GitHub Issues, where you can search and file new issues. </p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://slack.rancher.io/ ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Rancher Users Slack
                </a>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
