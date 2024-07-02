'use client'
import { BlogEntry } from '@/models/blog'
import '../../styles/blog.css'
import { useRouter } from 'next/navigation'

export const blogEntries: BlogEntry[] = [
  {
    title:
      'My First Hackathon: A Journey into Innovation at "Hack to the Future - A generative AI Hackathon"',
    date: '19th of May 2024',
    text: "Living in New Zealand, opportunities to be part of exciting events can sometimes feel scarce. When I learnt about ‘Hack to the Future. - A generative AI Hackathon’ by Provoke Solutions in Auckland, I did not hesitate to sign up.\n\nIn the days leading up to the hackathon, a mix of excitement and nerves swirled within me. Doubts about my skills crept in, questioning whether I could truly contribute meaningfully to the event. However, I decided to put my Growth Mindset into practice and stay positive.\n\nUpon arriving at the venue, we were warmly welcomed by Provoke’s team, easing my nerves. The revelation that teams would be a blend of participants like myself and professionals from Provoke fostered a sense of security and camaraderie among us.\n\nOnce the teams were formed, we began our brainstorming session as the Hackathon Musketeers. We had numerous ideas, each scrutinised against the judging criteria to ensure its viability. Despite our enthusiasm and creativity, decision-making proved to be a challenge. By lunchtime, we still hadn’t settled on a concept, causing a slight panic as we felt ourselves falling behind.\n\nFinally, we settled on the idea of a travel planner tailored for busy professionals — 'AItinerary'. The core functionality of our app was ambitious yet practical: it would streamline the organisation of meetings and travel arrangements for individuals constantly on the move. Leveraging AI, 'AItinerary' would analyse users' schedules, preferences, and locations to offer personalised activity suggestions, enhancing the experience of business travel. Moreover, it would calculate travel times to ensure seamless transitions between engagements, even factoring in logistical aspects like airport procedures.\n\nHowever, arriving at this idea was not without its challenges. We initially struggled to distil our vision from the broad concept of a 'travel planner' into something both digestible and in line with the hackathon requirements. Additionally, we had made the decision to use Next.js. This proved to be a challenge as it was my first time working with the framework. Hours passed with little progress, leaving us feeling somewhat defeated by the end of the day.\n\nUndeterred, we returned the next day with renewed determination. After a good night’s rest, we began to find our footing.\n\nAs the end of the hackathon approached, the pressure of time weighed heavily on us. Fortunately, some of our team members had made the clever decision to focus their energy on creating sketches of our idea and preparing presentation content and slides, which greatly helped us as presentation time drew closer.\n\nDespite encountering some technical difficulties during our presentation, the judges appeared quite receptive to our idea. It was then that I dared to hope we might have a shot at placing.\n\nWhile awaiting the judges' decision, we took many team photos and expressed gratitude for the experience.\n\nWhen the judges finally announced their decision, the Hackathon Musketeers were awarded first place for 'AItinerary'! Needless to say, we were ecstatic.\n\nThis experience taught me the importance of resilience and adaptability in the face of adversity, lessons that I will carry into my future projects.\n\nCollaborating with industry experts, I found myself learning and growing in ways I hadn’t anticipated. In the end, while our journey at the hackathon may have been brief, the experience left an indelible mark on me.",
    images: [
      {
        description: 'The Hackathon Musketeers!',
        link: '/provoke-hackathon/IMG_3646.JPG',
      },
      {
        description: 'A selfie for good measure.',
        link: '/provoke-hackathon/IMG_3652.JPG',
      },
    ],
  },
  {
    title: 'The Growth Mindset',
    date: '10th of May 2024',
    text: "As my bootcamp finished, I realised how much I was able to learn and accomplish.\n\nPrior to bootcamp, we were taught about the Growth Mindset (vs a fixed one). It was then that I realised how much my learning had suffered when I went to university fresh out of highschool to study Civil Engineering. I didn't believe that I could learn the complex concepts that make up structural engineering, so I didn't learn these. I often gave up prior to even trying to understand something.\n\nHowever, having learnt about the Growth Mindset prior to the beginning of bootcamp, I started practicing it. I told myself that things didn't need to be easy for me to understand them, and that I could work hard to learn things.\n\nStarting bootcamp with this mindset, I was able to tackle daunting concepts and get the most learning that I could.\n\nMy outlook on education and learning has forever changed following this experience.\n\nI will keep putting my Growth Mindset to practice and encourage others to do the same.",
  },
]

export default function BlogEntries() {
  // const blogEntries = blogEntries.reverse()
  const router = useRouter()
  // function log(i: number) {
  //   console.log(`/blog-entries/${i + 1}`)
  // }
  return (
    <main className="main">
      {' '}
      <h1>My Blog Entries</h1>
      <ul className="blog-entries">
        {blogEntries.map((blog, i) => (
          <li className="blog-item">
            <div
              className="blog-entry"
              onClick={() => router.push(`/blog-entries/${i + 1}`)}
            >
              <h2>{blog.title}</h2>
              <h4 style={{ marginLeft: '2em' }}>
                <em>posted on {blog.date}</em>
              </h4>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="test-box">
        <p>hello</p>
        <p>hello</p>
      </div>
      <div className="test-box2">
        <p>hello</p>
        <p>hello</p>
      </div> */}
    </main>
  )
}
