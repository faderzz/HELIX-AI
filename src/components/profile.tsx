import { useSession } from 'next-auth/react';
import { api } from '~/utils/api';
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar"
import { CardHeader, CardContent, Card } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import Link from "next/link"
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Telegram } from "@radix-ui/react-icons";


function ProfileCard() {
    const { data: sessionData } = useSession();
    const { data: user } = api.profile.getProfile.useQuery( // returns {accountNumber, email, id, image, name}
      undefined, // no input
      { enabled: sessionData?.user !== undefined }
    );
    console.log(user)
return (
    <div className="items-center gap-4 flex justify-center box outline-none dark:bg-black">
        <div className="mx-auto">
            <Card className="w-full max-w-max">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <CardHeader className="flex flex-col items-center mx-12">
                            <Avatar className="w-20 h-20 border-black">
                                <AvatarImage src={user?.image} />
                                <AvatarFallback>{user?.name[0] + user?.name[1]}</AvatarFallback>
                            </Avatar>
                            <div className="text-center pt-3">
                                <h3 className="text-lg font-bold">{user?.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 pb-1">User ID: {user?.accountNumber}</p>
                                {/* Rank tag */}
                                <Badge className="bg-green-400">3</Badge>
                            </div>
                            <div className="grid gap-2 items-center justify-center py-1">
                                <span>
                                    <img src="https://i.imgur.com/kob4lzm.png" width={150} alt="signature" />
                                </span>
                            </div>
                        </CardHeader>
                    </div>
                    <div className="flex-1 bg-gray-100 border-l-gray-200 border-l-2 rounded-sm">
                        {/* Example signature */}
                        <CardHeader className="flex items-center">
                            <h3 className="text-lg font-bold">About</h3>
                        </CardHeader>
                        <CardContent>
                            <img src="https://media.discordapp.net/attachments/1057657012097392640/1058235878180405368/Me_When.gif?ex=6618b476&is=66063f76&hm=af19ae459723ee148e3ffde3b0c43188549cf2a58499a8943bd7fd6731fee8a8&" width={200} alt="signature" />
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);
}

export default ProfileCard;