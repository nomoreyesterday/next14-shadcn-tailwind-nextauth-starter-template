"use client"

import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

import { Social } from "@/components/auth/social";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapper{
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
} : CardWrapper
) => {
  return ( 
    <div>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
      </Card>
    </div>
   );
}