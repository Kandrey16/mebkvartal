'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from '@/store/auth.store'

export default function Profile() {
  const { isAuth, okay, setOkay } = useAuthStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Avatar size="lg">
            <AvatarImage
              src="/images/avatar.png"
              alt="Профиль"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem>Профиль</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              console.log(isAuth)
            }}
          >
            Войти
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOkay('okay')
            }}
          >
            Профиль
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => console.log(okay)}
            variant="destructive"
          >
            Выход
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
