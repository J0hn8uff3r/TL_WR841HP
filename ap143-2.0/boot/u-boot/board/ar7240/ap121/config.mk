#
# Copyright (c) 2014 Qualcomm Atheros, Inc.
#
# See file CREDITS for list of people who contributed to this
# project.
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License as
# published by the Free Software Foundation; either version 2 of
# the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston,
# MA 02111-1307 USA
#

# ROM version
ifeq ($(COMPRESSED_UBOOT),1)
TEXT_BASE = 0x80010000
BOOTSTRAP_TEXT_BASE = 0x9f000000
else
TEXT_BASE = 0x9f000000
endif

# SDRAM version
#TEXT_BASE = 0x80000000
