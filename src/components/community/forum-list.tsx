import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const forumTopics = [
  {
    title: "Introduce Yourself! 👋",
    author: "Prerana K.",
    authorAvatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8fDE3NjIxNTQzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Welcome",
    categoryVariant: "secondary",
    replies: 15,
    lastActivity: "1 hour ago",
  },
  {
    title: "AMA with a Senior Software Engineer at Google",
    author: "Jane Doe",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    category: "Mentorship",
    categoryVariant: "default",
    replies: 128,
    lastActivity: "2 hours ago",
  },
  {
    title: "What are you learning this week?",
    author: "Emily White",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    category: "Learning",
    categoryVariant: "outline",
    replies: 45,
    lastActivity: "1 day ago",
  },
  {
    title: "Show & Tell: My first React project!",
    author: "Priya Sharma",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    category: "Projects",
    categoryVariant: "outline",
    replies: 72,
    lastActivity: "3 days ago",
  },
];


export default function ForumList() {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader>
        <CardTitle>Topics</CardTitle>
        <CardDescription>Browse the latest discussions in our community.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-full">Topic</TableHead>
                <TableHead className="text-center">Replies</TableHead>
                <TableHead className="text-right whitespace-nowrap">Last Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forumTopics.map((topic) => (
                <TableRow key={topic.title}>
                  <TableCell>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={topic.authorAvatar} alt={topic.author} />
                        <AvatarFallback>{topic.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href="#" className="font-medium hover:underline hover:text-primary transition-colors">
                          {topic.title}
                        </Link>
                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <span>by {topic.author} in</span>
                          <Badge variant={topic.categoryVariant as any}>{topic.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-medium">{topic.replies}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{topic.lastActivity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
