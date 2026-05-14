'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WorkPlaceholder from './WorkPlaceholder'

interface WorkCardProps {
  label: string
  name: string
  desc: string
  angle: number
  bg: string
  patternId: string
  aspect?: string
  year?: string
  href?: string
  image?: string
}

export default function WorkCard({
  label,
  name,
  desc,
  angle,
  bg,
  patternId,
  aspect = '4 / 3',
  year,
  href = '/work',
  image,
}: WorkCardProps) {
  const isExternal = href.startsWith('http')
  const cardProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <Link {...cardProps} className="block group">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {image ? (
          <div className="relative overflow-hidden w-full" style={{ aspectRatio: aspect }}>
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ) : (
          <WorkPlaceholder
            label={name}
            aspect={aspect}
            patternId={patternId}
            angle={angle}
            bg={bg}
          />
        )}
        {year ? (
          <div className="flex justify-between items-baseline mt-5">
            <p className="font-sans text-[11px] font-medium tracking-[0.13em] uppercase text-x-light-gray">
              {label}
            </p>
            <span className="font-sans text-[12px] text-x-light-gray tracking-[0.04em]">{year}</span>
          </div>
        ) : (
          <p className="font-sans text-[11px] font-medium tracking-[0.13em] uppercase text-x-light-gray mt-5">
            {label}
          </p>
        )}
        <h3 className="font-serif text-[26px] font-normal text-x-black mt-2 tracking-[-0.01em]">
          {name}
        </h3>
        <p className="font-sans text-[14px] text-x-gray mt-2 leading-[1.65] font-light">{desc}</p>
        <span className="btn-ghost-arrow inline-flex items-center font-sans text-[12px] text-x-black mt-4 font-medium tracking-[0.06em] uppercase">
          View project <span>&#8594;</span>
        </span>
      </motion.div>
    </Link>
  )
}
