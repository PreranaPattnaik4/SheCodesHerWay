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

const forumTopics = [
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
    title: "How to prepare for your first technical interview?",
    author: "Emily White",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    category: "Career Advice",
    categoryVariant: "secondary",
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
  {
    title: "Struggling with Imposter Syndrome",
    author: "Maria Garcia",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    category: "Support",
    categoryVariant: "destructive",
    replies: 98,
    lastActivity: "5 days ago",
  },
  {
    title: "Collaboration opportunity for a social impact app",
    author: "Aisha Khan",
    authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    category: "Opportunities",
    categoryVariant: "default",
    replies: 23,
    lastActivity: "1 week ago",
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
