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
                                <AvatarFallback>{(user?.name)}</AvatarFallback>
                            </Avatar>
                            <div className="text-center pt-3">
                                <h3 className="text-lg font-bold">{user?.name}</h3>
                            </div>
                            <div className="grid gap-2 items-center justify-center py-1">
                                <span>
                                    Plan: {user?.subscriptionType}
                                </span>
                            </div>
                        </CardHeader>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);
}

export default ProfileCard;