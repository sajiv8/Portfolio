const profile = {
  name: 'Sajiv Rajh',
  title: 'Software Engineer · Product Builder',
  email: 'sajiv.23@cse.mrt.ac.lk',
  phone: '+94 77 072 9545',
  location: 'Batticaloa, Sri Lanka',
  summary:
    'Frontend engineer focused on premium interfaces, clean systems, and product experiences that feel fast, thoughtful, and trustworthy.',
}

const sections = [
  {
    title: 'Selected Strengths',
    items: ['React architecture', 'Motion systems', 'Performance tuning', 'Accessible UI'],
  },
  {
    title: 'Core Stack',
    items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
  },
  {
    title: 'Working Style',
    items: ['Product thinking', 'Attention to detail', 'Clear communication', 'Iterative shipping'],
  },
]

function escapePdfText(value) {
  return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function wrapText(text, maxLength) {
  const words = text.split(' ')
  const lines = []
  let current = ''

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxLength && current) {
      lines.push(current)
      current = word
      return
    }
    current = next
  })

  if (current) {
    lines.push(current)
  }

  return lines
}

function buildPdf() {
  const commands = ['BT']
  let cursorY = 770

  const writeLine = (text, size = 11, x = 48, step = 16) => {
    commands.push(`/F1 ${size} Tf`)
    commands.push(`1 0 0 1 ${x} ${cursorY} Tm`)
    commands.push(`(${escapePdfText(text)}) Tj`)
    cursorY -= step
  }

  const writeSection = (title) => {
    cursorY -= 8
    writeLine(title, 14, 48, 20)
  }

  writeLine(profile.name, 22, 48, 28)
  writeLine(profile.title, 12, 48, 18)
  writeLine(profile.summary, 10, 48, 16)

  writeSection('Contact')
  writeLine(`Email: ${profile.email}`)
  writeLine(`Phone: ${profile.phone}`)
  writeLine(`Location: ${profile.location}`)

  sections.forEach((section) => {
    writeSection(section.title)
    wrapText(section.items.join(', '), 72).forEach((line) => writeLine(line, 10, 48, 14))
  })

  commands.push('ET')

  const content = commands.join('\n')
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ]

  const header = '%PDF-1.4\n'
  const chunks = [header]
  const offsets = [0]
  let currentLength = header.length

  objects.forEach((object, index) => {
    offsets[index + 1] = currentLength
    const chunk = `${index + 1} 0 obj\n${object}\nendobj\n`
    chunks.push(chunk)
    currentLength += chunk.length
  })

  const xrefOffset = currentLength
  let xref = `xref\n0 ${objects.length + 1}\n`
  xref += '0000000000 65535 f \n'

  for (let index = 1; index <= objects.length; index += 1) {
    xref += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`
  }

  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return new Blob([chunks.join(''), xref], { type: 'application/pdf' })
}

export function downloadResume() {
  const blob = buildPdf()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'Sajiv_Rajh_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
