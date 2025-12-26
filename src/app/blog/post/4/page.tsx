
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { brand } from '@/lib/brand';
import { Separator } from '@/components/ui/separator';

const post = {
    id: '4',
    title: 'SheCodesHerWay: Where Women Build Their Path, Lead Their Way, and Leave Their Mark',
    author: 'Prerana K.',
    authorAvatar: 'https://i.postimg.cc/HkLGWcM4/1718292767884.jpg',
    date: 'August 1, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'hero-background'),
};

export default function BlogPostPage4() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <article>
            {post.image && (
                <header className="relative h-96 w-full">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.image.imageHint}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                        <h1 className="font-headline text-4xl font-bold text-white drop-shadow-lg md:text-6xl max-w-4xl">
                            {post.title}
                        </h1>
                    </div>
                </header>
            )}
            <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-8">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Published on {post.date}</p>
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead">🌸 SheCodesHerWay: Where Women Build Their Path, Lead Their Way, and Leave Their Mark</p>
                    <p>Every movement begins with a spark — a spark of courage, vision, and hope. SheCodesHerWay was born from such a spark. A dream to create a space where women don’t just learn skills, but rise with confidence. Where they don’t simply follow paths — they build their own.</p>
                    <p>Today, SheCodesHerWay is officially stepping into a bold new chapter as a women-led digital empowerment platform, designed to uplift, guide, and inspire women to learn, lead, and rise together — across India and beyond.</p>
                    <p>This is more than a platform. It is a movement. It is a community. It is a shared rise.</p>

                    <Separator className="my-8" />

                    <h2>✨ Our Core Message</h2>
                    <blockquote>Build Your Path. Lead Your Way. Leave Your Mark.</blockquote>
                    <p>This message represents:</p>
                    <ul>
                        <li><strong>Independence</strong> — owning your journey</li>
                        <li><strong>Leadership</strong> — guiding yourself and others</li>
                        <li><strong>Legacy</strong> — creating impact that lasts</li>
                    </ul>
                    <p>Because every woman deserves a space where she can explore, grow, and shine — a place that reminds her of her strength, her voice, and her wings.</p>

                    <Separator className="my-8" />

                    <h2>🌸 {brand.programName} — Our Flagship Program</h2>
                    <blockquote>“Empower Her to Fly Beyond Limits.”</blockquote>
                    <p>At the heart of SheCodesHerWay lies {brand.programName}, our flagship women-led empowerment journey. {brand.programName} is designed to help women rise with confidence, clarity, and purpose through mentorship, guided learning, community support, and real-world exposure.</p>
                    <p>Whether a woman dreams of a career in tech, wants to build a business, hopes to grow as a creator, or is rediscovering her potential after a career break — {brand.programName} is her runway to flight.</p>
                    <p>Because when one woman takes flight, she inspires a thousand more to soar.</p>
                    
                    <h3>Sangini Udaan: EmpowerFly — Cohort 1 (Starting Soon)</h3>
                    <p><strong>Core Description:</strong> {brand.programName} — Cohort 1 is a supportive, women-led empowerment journey designed to help women rise with confidence and fly beyond limits. Rooted in mentorship, structured learning, and community support, this founding cohort empowers women to develop skills, strengthen self-belief, and move forward at their own pace — on their own terms.</p>
                    <p>This is more than a program. It is a shared rise — where women learn together, grow together, and fly beyond limits.</p>
                    
                    <h4>💖 A Warm Welcome to Our Founding Cohort</h4>
                    <p>A very warm welcome to all the participants and mentors joining our founding cohort. We are truly thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something meaningful, impactful, and lasting. Stay connected for upcoming announcements and follow our journey on social media as we take flight — together.</p>

                    <h4>💗 Choose Your {brand.programName} Journey</h4>
                    <p>Women can choose from five powerful learning and growth tracks:</p>
                    <ul>
                        <li><strong>Complete {brand.programName} Journey (All-in-One Track):</strong> A holistic blend of tech, business, creativity, leadership, and emotional empowerment.</li>
                        <li><strong>Women in Tech Path:</strong> Coding, AI, web development, digital tools, and tech confidence.</li>
                        <li><strong>Women in Business Path:</strong> Entrepreneurship, startup building, branding, and growth strategy.</li>
                        <li><strong>Creative & Content Entrepreneurs Path:</strong> Blogging, storytelling, Canva design, content creation, and publishing.</li>
                        <li><strong>Emotional, Personal & Soft Skills Growth Path:</strong> Confidence, communication, emotional intelligence, and leadership.</li>
                    </ul>
                    <p>Each path is designed to meet women where they are — and help them move forward with clarity and confidence.</p>

                    <Separator className="my-8" />
                    
                    <h2>🌍 The Sangini Network — Our Community</h2>
                    <p>Every woman who joins SheCodesHerWay becomes a Sangini — a friend, a sister, a changemaker. Our community is built on:</p>
                    <ul>
                        <li>Women supporting women</li>
                        <li>Shared learning and mentorship</li>
                        <li>Collaboration over competition</li>
                        <li>Growth that is celebrated together</li>
                    </ul>
                    <blockquote>Empowerment is never a solo flight — it is a shared rise.</blockquote>
                    
                    <Separator className="my-8" />

                    <h2>🚀 What We Do at SheCodesHerWay</h2>
                    <p>SheCodesHerWay offers a complete digital ecosystem to support women from learning → leadership → launch.
                    Key Platform Features:</p>
                    <ul>
                        <li>{brand.programName} Program</li>
                        <li>Mentorship Application & Partner Portal</li>
                        <li>Community & Collaboration Hub</li>
                        <li>Training-Based Internships & Career Pathways</li>
                        <li>AI-Enabled Support Tools for clarity and growth</li>
                        <li>Secure user access for a personalized experience</li>
                    </ul>
                    <p>Every feature is built with purpose, responsibility, and long-term impact in mind.</p>

                    <Separator className="my-8" />

                    <h2>🌱 New Updates — Grow With SheCodesHerWay</h2>
                    <p>Where Passion Meets Purpose to Build Something Meaningful Together. Join our mission to build a world where every woman has the opportunity to soar. Grow With SheCodesHerWay invites passionate individuals to contribute their skills, creativity, and commitment toward building an inclusive, women-led empowerment ecosystem. This is your chance to grow alongside a purpose-driven platform — while creating real, meaningful impact.</p>
                    
                    <h3>🌸 Early Core Contributor Application | SheCodesHerWay</h3>
                    <p>Join the Founding Circle. We are inviting students, freshers, and working professionals to join SheCodesHerWay as Early Core Contributors on a part-time collaboration basis. As an Early Core Contributor, you will:</p>
                    <ul>
                        <li>Take ownership of high-impact modules</li>
                        <li>Build specialized tools, creative assets, and strategic systems</li>
                        <li>Lead zero-to-one development in your domain</li>
                        <li>Work independently in a dedicated local environment</li>
                        <li>Help shape the future direction of the platform</li>
                    </ul>
                    <p>This is a rare opportunity to lead, contribute, and grow while directly supporting a women-led mission.</p>
                    <p><strong>⚖️ Important Collaboration Note:</strong> This is a voluntary, unpaid, and non-employment collaboration, designed for impact-driven contribution, hands-on learning and skill-building and leadership growth. Learn More & Apply to become part of the founding circle.</p>

                    <Separator className="my-8" />

                    <h2>🌱 Our Impact Goals (2025–2026)</h2>
                    <ul>
                        <li>Train 1,000+ women</li>
                        <li>Build a network of 100+ mentors</li>
                        <li>Collaborate with 10+ organizations</li>
                        <li>Grow a community of 5,000+ women</li>
                    </ul>
                    <p>Our success is measured not only in numbers — but in confidence built, voices found, and lives transformed.</p>

                    <Separator className="my-8" />

                    <h2>🌼 A Note of Gratitude to Our Founder</h2>
                    <p><strong>Founder: Prerana Kailash Pattnaik</strong></p>
                    <p>SheCodesHerWay exists because of a belief — that every woman deserves the opportunity to rise. As the founder and developer, Prerana Kailash Pattnaik built more than a platform. She built a community, a vision, and a pathway for women to discover their strength, skills, and wings. From idea to impact, her dedication transformed a dream into a living ecosystem of empowerment.</p>
                    
                    <Separator className="my-8" />

                    <h2>💫 Our Mission & Vision</h2>
                    <p><strong>Mission:</strong> To empower women with digital learning, mentorship, leadership development, and emotional strength — while building a global community rooted in creativity, collaboration, and courage.</p>
                    <p><strong>Vision:</strong> To create a world where every woman has the resources, opportunities, and confidence to rise beyond barriers and step into her fullest potential.</p>

                    <Separator className="my-8" />

                    <h2>🌷 Join Us — Let’s Build a Future Where Women Rise Higher</h2>
                    <p>SheCodesHerWay is more than a platform. It is a movement of confidence, creativity, and courage. Whether you join as a learner, mentor, or contributor, you become part of a story bigger than yourself — a story where women rise, lead, and inspire.</p>
                    <blockquote>Because when one woman rises… the world rises with her.</blockquote>

                    <h4>💚 Connect With Us</h4>
                    <ul>
                        <li><strong>Website:</strong> <a href="https://shecodesherways.com" target="_blank" rel="noopener noreferrer">https://shecodesherways.com</a></li>
                        <li><strong>Email:</strong> contact@shecodesherway.com</li>
                        <li><strong>Instagram:</strong> @shecodesherway</li>
                        <li><strong>LinkedIn:</strong> SheCodesHerWay</li>
                    </ul>

                </div>

                <div className="mt-12 pt-8 border-t">
                    <Button asChild variant="outline">
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Blogs
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

