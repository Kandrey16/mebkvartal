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
import { useAuth } from '@/hooks/useAuth'
import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const { isAuth } = useAuthStore()
  const route = useRouter()
  const { logOut } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
      {isAuth ? (
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => {
                console.log(isAuth)
              }}
            >
              Профиль
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => logOut()}
              variant="destructive"
            >
              Выход
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              route.push('/auth/signIn')
            }}
          >
            Войти
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}
