import React from 'react';
import TopNav from "../components/TopNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHandsClapping, faComment, faCircleMinus, faBookmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
    author: {
      name: 'Bonben',
      publication: 'Language Lab',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'How Knowledge of Languages Is More Valuable Than Ever on the Job Market',
    description: "It's not a skill issue, but a marketing issue",
    image: 'https://img.freepik.com/free-photo/mirroring-image-young-friends_23-2148281566.jpg?semt=ais_hybrid&w=740&q=80',
    date: '5d ago',
    likes: '1.2K',
    comments: '45',
  },
  {
    author: {
      name: 'Attila Vágó',
      publication: 'Level Up Coding',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'Welcome To Dream-Driven Development Where Nothing Works',
    description: 'Half-baked diagrams, features that make no sense, Mikado architecture. You\'ve seen it, and it has a name...',
    image: 'https://img.freepik.com/free-photo/mirroring-image-young-friends_23-2148281566.jpg?semt=ais_hybrid&w=740&q=80',
    date: '4d ago',
    likes: '709',
    comments: '16',
    clappedBy: 'Trey Huffine',
  },
  {
    author: {
      name: 'Iswarya writes',
      publication: 'Predict',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'Future-Proof Careers in the Age of AI: What You Should Learn in 2026',
    description: 'What if I told you that by this time next year, you could land a job that pays over $100,000—and it won\'t be threatened by AI?',
    image: 'https://img.freepik.com/free-photo/mirroring-image-young-friends_23-2148281566.jpg?semt=ais_hybrid&w=740&q=80',
    date: 'Jul 30',
    likes: '3.7K',
    comments: '165',
  },
  {
    author: {
      name: 'Clean Compiler',
      publication: '',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: '10 Java Collections Tricks Only Seniors Know',
    description: 'If you\'ve been coding in Java for a while, you probably use List, Set, and Map every single day. But here\'s the thing: most...',
    image: 'https://img.freepik.com/free-photo/mirroring-image-young-friends_23-2148281566.jpg?semt=ais_hybrid&w=740&q=80',
    date: '3d ago',
    likes: '52',
    comments: '5',
  },
  {
    author: {
      name: 'Jim the AI Whisperer',
      publication: 'The Generator',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word',
    description: 'Limiting output length reveals AI isn\'t intelligent—it\'s chatty!',
    image: 'https://img.freepik.com/free-photo/mirroring-image-young-friends_23-2148281566.jpg?semt=ais_hybrid&w=740&q=80',
    date: '9d ago',
    likes: '2K',
    comments: '36',
  },
];

const staffPicks = [
  {
    author: {
      name: 'Julie',
      publication: 'The Medium Handbook',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'How this brand strategist uses Medium to explore ideas, repurpose content, and land clients',
    date: '2d ago',
  },
  {
    author: {
      name: 'Jud Brewer MD PhD',
      publication: '',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
    date: '5d ago',
  },
  {
    author: {
      name: 'Linh Nguyen',
      publication: '',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
    },
    title: 'Golden Design Lessons From Tokyo Metro',
    date: 'Sep 3',
  },
];

const topics = ['Data Science', 'React', 'Coding', 'Mental Health', 'UX', 'Python'];

const recommendedAuthors = [
  {
    name: 'Dr. Derek Austin',
    description: 'AI strategist, former Twitch LLMs to Think. Full...',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
  },
  {
    name: 'ITNEXT publication',
    description: 'ITNEXT is a platform for IT developers & software...',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
  },
  {
    name: 'Oliver Foster',
    description: 'Primarily proficient in the Java programming...',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <TopNav />

      {/* Main Content */}
      <div className="flex">
        {/* Left Column - Articles */}
        <div className="w-full py-4 md:border-r border-gray-200 mx-auto px-4 sm:px-6 lg:px-[12%]">
          <div className="flex border-b border-gray-200 mb-4">
            <button className="mr-4 py-2 text-sm font-medium border-b-2 border-black text-black cursor-pointer">For you</button>
            <button className="mx-4 py-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Featured</button>
          </div>

          {articles.map((article, index) => (
            <div key={index} className={`flex flex-col sm:flex-row justify-between items-start py-6 group gap-4 sm:gap-8 ${index !== articles.length - 1 ? "border-b border-gray-200" : ""}`}>
              <div className="flex-1 pr-0 sm:pr-4 order-2 sm:order-1">
                {article.clappedBy && <span className="flex items-center pb-4 text-gray-500 text-xs sm:text-sm"><FontAwesomeIcon icon={faHandsClapping} className="mr-2 text-gray-700 text-base sm:text-lg" /><span className="text-gray-700 mr-1" >{article.clappedBy}</span> clapped</span>}
                <div className="flex items-center mb-2 sm:mb-4">
                  <img src={article.author.avatar} alt="Author" className="w-5 h-5 sm:w-6 sm:h-6 rounded-sm mr-2" />
                  <span className="text-xs sm:text-sm font-medium">
                    {article.author.publication && (
                      <>
                        <span className="text-gray-500">In </span>
                        <span className="text-black">{article.author.publication}</span>
                        <span className="text-gray-500"> </span>
                        <span className="text-gray-500">by </span>
                      </>
                    )}
                    <span className="text-black">{article.author.name}</span>
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-gray-900 leading-tight w-full sm:w-[90%]">{article.title}</h2>
                <p className="text-gray-600 text-sm sm:text-md mb-2 sm:mb-3 line-clamp-2">{article.description}</p>
                <div className='flex items-center justify-between mt-2'>
                  <div className="flex text-xs sm:text-sm text-gray-500 transition-colors flex-wrap gap-y-2">
                    <span className="mr-3 sm:mr-5 flex items-center"><FontAwesomeIcon icon={faStar} className=' text-amber-300 cursor-pointer text-base sm:text-lg mr-1 sm:mr-2' /></span>
                    <span className="mr-3 sm:mr-5 flex items-center">{article.date}</span>
                    <span className="mr-3 sm:mr-5 flex items-center"><FontAwesomeIcon icon={faHandsClapping} className=' hover:text-gray-900 cursor-pointer text-base sm:text-lg mr-1 sm:mr-2 transition-colors' />{article.likes}</span>
                    <span className="mr-3 sm:mr-5 flex items-center"><FontAwesomeIcon icon={faComment} className=' hover:text-gray-900 cursor-pointer text-base sm:text-lg mr-1 sm:mr-2 transition-colors' />{article.comments}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-lg sm:text-xl">
                    <span className="ml-4 sm:ml-8"><FontAwesomeIcon icon={faCircleMinus} className=' hover:text-gray-900 cursor-pointer transition-colors' /></span>
                    <span className="ml-4 sm:ml-8"><FontAwesomeIcon icon={faBookmark} className=' hover:text-gray-900 cursor-pointer transition-colors' /></span>
                    <span className="ml-4 sm:ml-8"><FontAwesomeIcon icon={faEllipsis} className=' hover:text-gray-900 cursor-pointer transition-colors' /></span>
                  </div>
                </div>
              </div>
              <div className="w-full h-40 sm:w-32 sm:h-24 flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
                <img src={article.image} alt="Article visual" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Staff Picks & Recommendations */}
        <div className="hidden md:block w-1/3 lg:w-2/5 p-4 px-8 border-l border-gray-200">
          <div className="mb-8">
            <h3 className="font-bold mb-4">Staff Picks</h3>
            {staffPicks.map((pick, index) => (
              <div key={index} className="mb-7 items-start">
                <div className='flex items-center mb-3'>
                  <img src={pick.author.avatar} alt="Author" className="w-7 h-7 rounded-sm mr-2" />
                  <p className="text-gray-500 ml-1">
                    {pick.author.name} {pick.author.publication && `in ${pick.author.publication}`}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold leading-snug mb-2">{pick.title}</p>
                  
                  <p className="text-sm text-gray-500">{pick.date}</p>
                </div>
              </div>
            ))}
            <button className="text-gray-600 text-sm mt-4 flex items-center">
              See the full list
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4">Recommended topics</h3>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                  {topic}
                </span>
              ))}
            </div>
            <button className="text-gray-600 text-sm mt-4">See more topics</button>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4">Who to follow</h3>
            {recommendedAuthors.map((author, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={author.avatar} alt="Author" className="w-8 h-8 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-sm">{author.name}</p>
                    <p className="text-xs text-gray-600 line-clamp-1">{author.description}</p>
                  </div>
                </div>
                <button className="bg-transparent text-gray-600 text-xs px-3 py-2 rounded-full border-2 border-gray-600 cursor-pointer">Follow</button>
              </div>
            ))}
            <button className="text-gray-600 text-sm mt-4">See more suggestions</button>
          </div>

          <div>
            <h3 className="font-bold mb-4">Reading list</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Click the <FontAwesomeIcon icon={faBookmark} className="mx-1" /> on any story to easily add it to your reading list or a custom list that you can share.
            </p>
            <div className="mt-4 text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
              <a href="#" className="hover:underline">Help</a>
              <a href="#" className="hover:underline">Status</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Press</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Rules</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;