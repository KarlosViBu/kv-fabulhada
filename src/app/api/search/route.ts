import { NextRequest, NextResponse } from 'next/server'

type Data = {
    message: string
}

export function GET(req: NextRequest, res: NextResponse<Data>) {
    return NextResponse.json({ message: `Debe especificar la búsqueda *`, });
}